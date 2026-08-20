export default {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN || '*';
    const origin = request.headers.get('Origin') || '';
    const corsOrigin = allowedOrigin === '*' ? '*' : (origin === allowedOrigin ? origin : allowedOrigin);
    const headers = {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
      'Vary': 'Origin'
    };

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, headers);
    if (allowedOrigin !== '*' && origin && origin !== allowedOrigin) return json({ error: 'Origin not allowed' }, 403, headers);
    if (!env.OPENAI_API_KEY) return json({ error: 'OPENAI_API_KEY secret is not configured' }, 500, headers);

    try {
      const body = await request.json();
      const images = Array.isArray(body.images) ? body.images.slice(0, 4) : [];
      if (!images.length) return json({ error: 'No images supplied' }, 400, headers);
      if (images.some(x => typeof x !== 'string' || !x.startsWith('data:image/'))) {
        return json({ error: 'Images must be base64 data URLs' }, 400, headers);
      }

      const content = [
        {
          type: 'input_text',
          text: `Analyze these pantry, refrigerator, freezer, or countertop photos. Identify only food ingredients or cooking staples that are visibly present or whose product labels are readable. Use common grocery names that can be matched to recipes (examples: ground beef, chicken breasts, cheddar cheese, eggs, milk, rice, spaghetti, marinara sauce, potatoes, onions). Do not guess hidden ingredients or quantities. Combine duplicates. Return ONLY valid JSON in exactly this shape: {"ingredients":["ingredient 1","ingredient 2"]}`
        },
        ...images.map(image_url => ({ type: 'input_image', image_url, detail: 'auto' }))
      ];

      const openaiResponse = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: env.OPENAI_MODEL || 'gpt-5.6-luna',
          input: [{ role: 'user', content }],
          max_output_tokens: 900
        })
      });

      const payload = await openaiResponse.json();
      if (!openaiResponse.ok) {
        console.error('OpenAI error', JSON.stringify(payload));
        return json({ error: 'AI ingredient scan failed' }, 502, headers);
      }

      const outputText = extractOutputText(payload);
      let parsed;
      try {
        parsed = JSON.parse(outputText);
      } catch {
        const match = outputText.match(/\{[\s\S]*\}/);
        parsed = match ? JSON.parse(match[0]) : null;
      }
      const ingredients = Array.isArray(parsed?.ingredients)
        ? [...new Set(parsed.ingredients.map(x => String(x).trim()).filter(Boolean))].slice(0, 120)
        : [];
      return json({ ingredients }, 200, headers);
    } catch (error) {
      console.error(error);
      return json({ error: 'Unable to process pantry scan' }, 500, headers);
    }
  }
};

function extractOutputText(payload) {
  if (typeof payload.output_text === 'string') return payload.output_text;
  for (const item of payload.output || []) {
    for (const part of item.content || []) {
      if (part.type === 'output_text' && typeof part.text === 'string') return part.text;
    }
  }
  return '';
}

function json(data, status, headers) {
  return new Response(JSON.stringify(data), { status, headers });
}

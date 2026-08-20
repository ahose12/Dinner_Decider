const dinners = [
  { name: "Classic Cheeseburgers & Fries", category: "Burgers & Sandwiches", calories: 820, description: "A straightforward cheeseburger dinner with oven fries and your favorite toppings.", ingredients: ["Ground beef", "Burger buns", "Cheddar cheese", "Russet potatoes", "Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mustard"] },
  { name: "BBQ Pulled Pork Sandwiches", category: "Burgers & Sandwiches", calories: 690, description: "Tender pulled pork with barbecue sauce on soft buns, great with slaw or baked beans.", ingredients: ["Pork shoulder or pre-cooked pulled pork", "BBQ sauce", "Sandwich buns", "Coleslaw mix", "Mayonnaise", "Apple cider vinegar", "Baked beans"] },
  { name: "Philly Cheesesteaks", category: "Burgers & Sandwiches", calories: 760, description: "Thin-sliced beef, peppers, onions, and melted cheese piled into toasted hoagie rolls.", ingredients: ["Thin-sliced steak", "Hoagie rolls", "Provolone cheese", "Green bell peppers", "Onion", "Mushrooms (optional)", "Butter", "Salt & pepper"] },
  { name: "Grilled Chicken Sandwiches", category: "Burgers & Sandwiches", calories: 610, description: "Seasoned grilled chicken breasts on toasted buns with crisp toppings.", ingredients: ["Chicken breasts", "Burger buns", "Lettuce", "Tomato", "Pickles", "Mayonnaise", "Paprika", "Garlic powder"] },

  { name: "Meatloaf & Mashed Potatoes", category: "Comfort Food", calories: 720, description: "Old-school meatloaf with creamy mashed potatoes and green beans.", ingredients: ["Ground beef", "Breadcrumbs", "Eggs", "Milk", "Onion", "Ketchup", "Worcestershire sauce", "Potatoes", "Butter", "Green beans"] },
  { name: "Chicken Pot Pie", category: "Comfort Food", calories: 640, description: "Creamy chicken and vegetables baked beneath a golden flaky crust.", ingredients: ["Cooked chicken", "Pie crust", "Frozen mixed vegetables", "Chicken broth", "Milk or cream", "Butter", "Flour", "Onion", "Thyme"] },
  { name: "Country Fried Steak", category: "Comfort Food", calories: 860, description: "Crispy breaded cube steak with peppered white gravy and mashed potatoes.", ingredients: ["Cube steak", "Flour", "Eggs", "Milk", "Oil", "Black pepper", "Potatoes", "Butter", "Green beans or corn"] },
  { name: "Chicken & Dumplings", category: "Comfort Food", calories: 580, description: "Rich chicken stew with soft dumplings for an easy cozy dinner.", ingredients: ["Chicken", "Chicken broth", "Carrots", "Celery", "Onion", "Biscuit dough or dumpling mix", "Milk", "Butter", "Thyme"] },

  { name: "Spaghetti & Meat Sauce", category: "Pasta", calories: 670, description: "Weeknight spaghetti with a hearty beef and tomato sauce.", ingredients: ["Spaghetti", "Ground beef", "Marinara sauce", "Onion", "Garlic", "Parmesan cheese", "Italian seasoning", "Garlic bread"] },
  { name: "Chicken Alfredo", category: "Pasta", calories: 790, description: "Creamy Alfredo pasta with seasoned chicken and Parmesan.", ingredients: ["Fettuccine", "Chicken breasts", "Heavy cream", "Butter", "Parmesan cheese", "Garlic", "Parsley", "Broccoli (optional)"] },
  { name: "Baked Ziti", category: "Pasta", calories: 710, description: "Cheesy baked pasta layered with meat sauce, ricotta, and mozzarella.", ingredients: ["Ziti pasta", "Ground beef or Italian sausage", "Marinara sauce", "Ricotta", "Mozzarella", "Parmesan", "Italian seasoning"] },
  { name: "Cajun Chicken Pasta", category: "Pasta", calories: 740, description: "Creamy pasta with Cajun-seasoned chicken, peppers, and Parmesan.", ingredients: ["Penne pasta", "Chicken breasts", "Cajun seasoning", "Heavy cream", "Parmesan", "Bell pepper", "Onion", "Garlic"] },

  { name: "Taco Night", category: "Tex-Mex", calories: 650, description: "Build-your-own beef tacos with cheese, lettuce, tomato, and salsa.", ingredients: ["Ground beef", "Taco seasoning", "Taco shells or tortillas", "Shredded cheese", "Lettuce", "Tomato", "Salsa", "Sour cream", "Refried beans"] },
  { name: "Chicken Quesadillas", category: "Tex-Mex", calories: 620, description: "Crispy tortillas packed with chicken and melted cheese, served with salsa.", ingredients: ["Flour tortillas", "Cooked chicken", "Shredded cheese", "Bell peppers", "Onion", "Salsa", "Sour cream", "Taco seasoning"] },
  { name: "Loaded Beef Nachos", category: "Tex-Mex", calories: 780, description: "A sheet-pan dinner of tortilla chips, seasoned beef, beans, cheese, and toppings.", ingredients: ["Tortilla chips", "Ground beef", "Taco seasoning", "Black beans", "Shredded cheese", "Jalapeños", "Tomato", "Salsa", "Sour cream"] },
  { name: "Chicken Fajitas", category: "Tex-Mex", calories: 590, description: "Sizzling chicken strips with peppers and onions in warm tortillas.", ingredients: ["Chicken breasts", "Flour tortillas", "Bell peppers", "Onion", "Fajita seasoning", "Lime", "Shredded cheese", "Sour cream"] },

  { name: "Grilled Steak & Baked Potato", category: "Steak & Grill", calories: 760, description: "A simple steakhouse-style plate with baked potato and roasted vegetables.", ingredients: ["Steaks", "Russet potatoes", "Butter", "Sour cream", "Shredded cheese", "Broccoli or asparagus", "Steak seasoning"] },
  { name: "BBQ Chicken & Corn", category: "Steak & Grill", calories: 620, description: "Grilled barbecue chicken with corn on the cob and a quick side salad.", ingredients: ["Chicken thighs or breasts", "BBQ sauce", "Corn on the cob", "Salad greens", "Tomato", "Ranch or vinaigrette"] },
  { name: "Grilled Pork Chops", category: "Steak & Grill", calories: 610, description: "Seasoned pork chops with roasted potatoes and green beans.", ingredients: ["Pork chops", "Baby potatoes", "Green beans", "Olive oil", "Garlic powder", "Paprika", "Salt & pepper"] },
  { name: "Steak Kabobs", category: "Steak & Grill", calories: 590, description: "Grilled steak, peppers, onions, and mushrooms with seasoned rice.", ingredients: ["Sirloin steak", "Bell peppers", "Red onion", "Mushrooms", "Kabob skewers", "Rice", "Steak seasoning"] },

  { name: "Oven-Baked Chicken & Rice", category: "Chicken", calories: 610, description: "Seasoned baked chicken over savory rice for an easy one-pan meal.", ingredients: ["Chicken thighs", "Long-grain rice", "Chicken broth", "Onion", "Garlic", "Paprika", "Butter", "Green beans"] },
  { name: "Chicken Parmesan", category: "Chicken", calories: 720, description: "Breaded chicken with marinara and mozzarella served over pasta.", ingredients: ["Chicken breasts", "Breadcrumbs", "Eggs", "Marinara sauce", "Mozzarella", "Parmesan", "Spaghetti", "Italian seasoning"] },
  { name: "Buffalo Chicken Wraps", category: "Chicken", calories: 560, description: "Buffalo chicken, lettuce, cheese, and ranch wrapped in a flour tortilla.", ingredients: ["Cooked chicken", "Buffalo sauce", "Flour tortillas", "Lettuce", "Shredded cheese", "Ranch dressing", "Tomato"] },
  { name: "Honey Garlic Chicken", category: "Chicken", calories: 600, description: "Sweet-savory chicken with rice and broccoli in a sticky honey garlic sauce.", ingredients: ["Chicken breasts or thighs", "Honey", "Soy sauce", "Garlic", "Rice", "Broccoli", "Cornstarch", "Sesame seeds (optional)"] },

  { name: "Homestyle Beef Chili", category: "Soups & Chili", calories: 520, description: "Thick beef and bean chili with classic toppings and cornbread on the side.", ingredients: ["Ground beef", "Kidney beans", "Diced tomatoes", "Tomato sauce", "Onion", "Chili powder", "Cumin", "Shredded cheese", "Cornbread mix"] },
  { name: "Loaded Potato Soup", category: "Soups & Chili", calories: 610, description: "Creamy potato soup topped with cheddar, bacon, and green onions.", ingredients: ["Russet potatoes", "Chicken broth", "Milk or cream", "Cheddar cheese", "Bacon", "Green onions", "Butter", "Flour"] },
  { name: "Chicken Noodle Soup", category: "Soups & Chili", calories: 420, description: "Classic chicken noodle soup with vegetables and a warm dinner roll.", ingredients: ["Chicken", "Egg noodles", "Chicken broth", "Carrots", "Celery", "Onion", "Garlic", "Dinner rolls"] },
  { name: "Beef Stew", category: "Soups & Chili", calories: 560, description: "Slow-simmered beef, potatoes, carrots, and onions in a rich gravy.", ingredients: ["Beef stew meat", "Potatoes", "Carrots", "Onion", "Beef broth", "Tomato paste", "Worcestershire sauce", "Flour"] },

  { name: "Pepperoni Pizza Night", category: "Pizza & Flatbreads", calories: 720, description: "Classic pepperoni pizza using prepared dough for an easy family dinner.", ingredients: ["Pizza dough", "Pizza sauce", "Mozzarella", "Pepperoni", "Parmesan", "Italian seasoning", "Salad kit (optional)"] },
  { name: "BBQ Chicken Pizza", category: "Pizza & Flatbreads", calories: 680, description: "Tangy BBQ chicken pizza with red onion, mozzarella, and cilantro.", ingredients: ["Pizza dough", "Cooked chicken", "BBQ sauce", "Mozzarella", "Red onion", "Cilantro"] },
  { name: "Cheeseburger Flatbreads", category: "Pizza & Flatbreads", calories: 650, description: "Ground beef, cheddar, pickles, and burger sauce on crisp flatbread.", ingredients: ["Flatbreads", "Ground beef", "Cheddar cheese", "Pickles", "Onion", "Ketchup", "Mustard", "Mayonnaise"] },

  { name: "Breakfast for Dinner", category: "Breakfast for Dinner", calories: 690, description: "Eggs, bacon, pancakes, and hash browns—the anytime dinner fallback.", ingredients: ["Eggs", "Bacon or sausage", "Pancake mix", "Milk", "Butter", "Maple syrup", "Frozen hash browns"] },
  { name: "Biscuits & Sausage Gravy", category: "Breakfast for Dinner", calories: 760, description: "Fluffy biscuits covered in sausage gravy with eggs on the side.", ingredients: ["Biscuits", "Breakfast sausage", "Flour", "Milk", "Black pepper", "Eggs", "Butter"] },
  { name: "Breakfast Burritos", category: "Breakfast for Dinner", calories: 640, description: "Scrambled eggs, sausage, cheese, and potatoes wrapped in warm tortillas.", ingredients: ["Eggs", "Breakfast sausage", "Flour tortillas", "Shredded cheese", "Potatoes or hash browns", "Salsa"] },

  { name: "Salisbury Steak", category: "Classic American", calories: 680, description: "Seasoned beef patties with onion gravy, mashed potatoes, and peas.", ingredients: ["Ground beef", "Breadcrumbs", "Egg", "Onion", "Beef broth", "Worcestershire sauce", "Potatoes", "Butter", "Frozen peas"] },
  { name: "Sloppy Joes", category: "Classic American", calories: 610, description: "Sweet and tangy seasoned beef piled onto toasted buns with a simple side.", ingredients: ["Ground beef", "Sandwich buns", "Ketchup", "Mustard", "Brown sugar", "Worcestershire sauce", "Onion", "Frozen fries or chips"] },
  { name: "Hot Dogs & Mac and Cheese", category: "Classic American", calories: 740, description: "An easy crowd-pleaser with grilled hot dogs and creamy mac and cheese.", ingredients: ["Hot dogs", "Hot dog buns", "Macaroni", "Cheddar cheese", "Milk", "Butter", "Ketchup", "Mustard", "Relish"] },
  { name: "Beef Pot Roast", category: "Classic American", calories: 650, description: "Tender roast beef with carrots, potatoes, and onions in a savory pan gravy.", ingredients: ["Chuck roast", "Potatoes", "Carrots", "Onion", "Beef broth", "Worcestershire sauce", "Garlic", "Rosemary or thyme"] }
];

const categoryMeta = {
  "Burgers & Sandwiches": "🍔", "Comfort Food": "🥘", "Pasta": "🍝", "Tex-Mex": "🌮",
  "Steak & Grill": "🥩", "Chicken": "🍗", "Soups & Chili": "🥣", "Pizza & Flatbreads": "🍕",
  "Breakfast for Dinner": "🍳", "Classic American": "🇺🇸"
};

const categorySelect = document.getElementById('categorySelect');
const dinnerSelect = document.getElementById('dinnerSelect');
const mealName = document.getElementById('mealName');
const mealCategory = document.getElementById('mealCategory');
const mealCalories = document.getElementById('mealCalories');
const mealDescription = document.getElementById('mealDescription');
const ingredientList = document.getElementById('ingredientList');
const categoryCards = document.getElementById('categoryCards');
const copyBtn = document.getElementById('copyBtn');

const categories = [...new Set(dinners.map(d => d.category))];
categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
});

function filteredDinners() {
  return categorySelect.value === 'all' ? dinners : dinners.filter(d => d.category === categorySelect.value);
}

function populateDinnerSelect(selectedName) {
  const list = filteredDinners();
  dinnerSelect.innerHTML = '';
  list.forEach(dinner => {
    const option = document.createElement('option');
    option.value = dinner.name;
    option.textContent = dinner.name;
    dinnerSelect.appendChild(option);
  });
  if (selectedName && list.some(d => d.name === selectedName)) dinnerSelect.value = selectedName;
  renderDinner(list.find(d => d.name === dinnerSelect.value) || list[0]);
}

function renderDinner(dinner) {
  if (!dinner) return;
  mealName.textContent = dinner.name;
  mealCategory.textContent = `${categoryMeta[dinner.category] || '🍽️'} ${dinner.category}`;
  mealCalories.textContent = `≈ ${dinner.calories} cal / serving`;
  mealDescription.textContent = dinner.description;
  ingredientList.innerHTML = dinner.ingredients.map(item => `<li>${item}</li>`).join('');
}

function randomizeDinner() {
  const list = filteredDinners();
  const dinner = list[Math.floor(Math.random() * list.length)];
  dinnerSelect.value = dinner.name;
  renderDinner(dinner);
  document.getElementById('planner').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

categorySelect.addEventListener('change', () => populateDinnerSelect());
dinnerSelect.addEventListener('change', () => renderDinner(dinners.find(d => d.name === dinnerSelect.value)));
document.getElementById('randomizeBtn').addEventListener('click', randomizeDinner);
document.getElementById('heroRandomize').addEventListener('click', randomizeDinner);

copyBtn.addEventListener('click', async () => {
  const dinner = dinners.find(d => d.name === dinnerSelect.value);
  const text = `${dinner.name}\n\n${dinner.ingredients.map(i => `- ${i}`).join('\n')}`;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy ingredients', 1500);
  } catch {
    copyBtn.textContent = 'Copy failed';
  }
});

categories.forEach(category => {
  const count = dinners.filter(d => d.category === category).length;
  const card = document.createElement('button');
  card.className = 'category-card';
  card.innerHTML = `<span class="emoji">${categoryMeta[category] || '🍽️'}</span><strong>${category}</strong><small>${count} dinner ideas</small>`;
  card.addEventListener('click', () => {
    categorySelect.value = category;
    populateDinnerSelect();
    document.getElementById('planner').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  categoryCards.appendChild(card);
});

populateDinnerSelect('Meatloaf & Mashed Potatoes');

// ---------------- SUPABASE + AI PANTRY SCANNER ----------------
const SUPABASE_URL = "https://inuqosrjpjmoyegmssic.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_aDkDor4mMtUVPqgEkdi7wQ_hmXvUrpe";
const AI_FUNCTION_NAME = "scan-pantry";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const MAX_PANTRY_PHOTOS = 4;
const MAX_IMAGE_SIDE = 1280;
const JPEG_QUALITY = 0.78;

const authEmail = document.getElementById('authEmail');
const authPassword = document.getElementById('authPassword');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signOutBtn = document.getElementById('signOutBtn');
const signedOutBox = document.getElementById('signedOutBox');
const signedInBox = document.getElementById('signedInBox');
const signedInEmail = document.getElementById('signedInEmail');
const authStatus = document.getElementById('authStatus');
const pantryPhotos = document.getElementById('pantryPhotos');
const previewGrid = document.getElementById('previewGrid');
const scanPantryBtn = document.getElementById('scanPantryBtn');
const clearPantryBtn = document.getElementById('clearPantryBtn');
const pantryStatus = document.getElementById('pantryStatus');
const detectedIngredients = document.getElementById('detectedIngredients');
const canMakeList = document.getElementById('canMakeList');
const almostList = document.getElementById('almostList');
const otherMatches = document.getElementById('otherMatches');
let pantryFiles = [];

async function refreshAuthUI() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  const signedIn = Boolean(session?.user);
  signedOutBox.hidden = signedIn;
  signedInBox.hidden = !signedIn;
  signedInEmail.textContent = session?.user?.email || '';
  scanPantryBtn.disabled = !signedIn;
  if (!signedIn && !pantryStatus.textContent) {
    pantryStatus.textContent = 'Sign in before scanning pantry photos.';
  } else if (signedIn && pantryStatus.textContent === 'Sign in before scanning pantry photos.') {
    pantryStatus.textContent = '';
  }
  return session;
}

signInBtn.addEventListener('click', async () => {
  authStatus.textContent = 'Signing in…';
  const { error } = await supabaseClient.auth.signInWithPassword({
    email: authEmail.value.trim(),
    password: authPassword.value
  });
  authStatus.textContent = error ? error.message : 'Signed in.';
  if (!error) authPassword.value = '';
  await refreshAuthUI();
});

signUpBtn.addEventListener('click', async () => {
  authStatus.textContent = 'Creating account…';
  const { data, error } = await supabaseClient.auth.signUp({
    email: authEmail.value.trim(),
    password: authPassword.value
  });
  if (error) {
    authStatus.textContent = error.message;
  } else if (data.session) {
    authStatus.textContent = 'Account created and signed in.';
  } else {
    authStatus.textContent = 'Account created. Check your email to confirm, then sign in.';
  }
  if (!error) authPassword.value = '';
  await refreshAuthUI();
});

signOutBtn.addEventListener('click', async () => {
  await supabaseClient.auth.signOut();
  authStatus.textContent = 'Signed out.';
  await refreshAuthUI();
});

supabaseClient.auth.onAuthStateChange(() => {
  setTimeout(refreshAuthUI, 0);
});

refreshAuthUI();

const ingredientAliases = {
  'ground beef': ['beef mince', 'hamburger meat', 'hamburger'],
  'chicken breasts': ['chicken breast'],
  'chicken thighs': ['chicken thigh'],
  'cooked chicken': ['rotisserie chicken', 'shredded chicken'],
  'shredded cheese': ['cheese'],
  'cheddar cheese': ['cheddar'],
  'mozzarella': ['mozzarella cheese'],
  'parmesan': ['parmesan cheese'],
  'russet potatoes': ['potatoes', 'potato'],
  'baby potatoes': ['potatoes', 'potato'],
  'flour tortillas': ['tortillas', 'tortilla'],
  'taco shells or tortillas': ['tortillas', 'taco shells'],
  'milk or cream': ['milk', 'heavy cream', 'cream'],
  'heavy cream': ['cream'],
  'sandwich buns': ['buns', 'hamburger buns', 'burger buns'],
  'burger buns': ['buns', 'hamburger buns'],
  'hoagie rolls': ['sub rolls', 'hoagie buns'],
  'pizza dough': ['pizza crust'],
  'long-grain rice': ['rice'],
  'egg noodles': ['noodles'],
  'ziti pasta': ['ziti'],
  'penne pasta': ['penne'],
  'fettuccine': ['pasta'],
  'spaghetti': ['pasta'],
  'marinara sauce': ['pasta sauce', 'spaghetti sauce', 'tomato sauce'],
  'pizza sauce': ['tomato sauce', 'marinara sauce'],
  'salad greens': ['lettuce', 'salad mix'],
  'frozen mixed vegetables': ['mixed vegetables'],
  'green bell peppers': ['bell pepper', 'bell peppers'],
  'bell peppers': ['bell pepper'],
  'corn on the cob': ['corn'],
  'breakfast sausage': ['sausage'],
  'steaks': ['steak'],
  'sirloin steak': ['steak', 'sirloin'],
  'cube steak': ['steak'],
  'beef stew meat': ['beef'],
  'chuck roast': ['beef roast', 'roast'],
  'pork shoulder or pre-cooked pulled pork': ['pork shoulder', 'pulled pork'],
  'chicken thighs or breasts': ['chicken thigh', 'chicken thighs', 'chicken breast', 'chicken breasts', 'chicken'],
  'chicken breasts or thighs': ['chicken thigh', 'chicken thighs', 'chicken breast', 'chicken breasts', 'chicken'],
  'ground beef or italian sausage': ['ground beef', 'italian sausage', 'sausage'],
  'bacon or sausage': ['bacon', 'sausage'],
  'potatoes or hash browns': ['potatoes', 'hash browns']
};

function normalizeIngredient(value) {
  return value.toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/\b(frozen|fresh|cooked|prepared|shredded|thin-sliced|seasoned|warm|toasted)\b/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function requiredIngredients(dinner) {
  return dinner.ingredients.filter(i => !i.toLowerCase().includes('(optional)'));
}

function pantryHas(requirement, pantry) {
  const req = normalizeIngredient(requirement);
  const choices = [req, ...(ingredientAliases[req] || []).map(normalizeIngredient)];
  return pantry.some(item => {
    const have = normalizeIngredient(item);
    return choices.some(choice => have === choice || have.includes(choice) || choice.includes(have));
  });
}

function rankDinners(pantry) {
  return dinners.map(dinner => {
    const required = requiredIngredients(dinner);
    const missing = required.filter(item => !pantryHas(item, pantry));
    const matched = required.length - missing.length;
    const ratio = required.length ? matched / required.length : 0;
    return { dinner, required, missing, matched, ratio };
  }).sort((a, b) => a.missing.length - b.missing.length || b.ratio - a.ratio || b.matched - a.matched);
}

function resultCard(result) {
  const div = document.createElement('div');
  div.className = 'match-card';
  const missingText = result.missing.length ? `Missing: ${result.missing.join(', ')}` : 'You appear to have every listed ingredient.';
  div.innerHTML = `
    <div class="match-card-top">
      <div>
        <strong>${result.dinner.name}</strong>
        <div class="match-meta">${result.matched}/${result.required.length} ingredients matched · ≈ ${result.dinner.calories} cal / serving</div>
      </div>
      <button class="match-action" type="button">View dinner</button>
    </div>
    <div class="missing">${missingText}</div>`;
  div.querySelector('.match-action').addEventListener('click', () => {
    categorySelect.value = result.dinner.category;
    populateDinnerSelect(result.dinner.name);
    document.getElementById('planner').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  return div;
}

function renderMatches(pantry) {
  const ranked = rankDinners(pantry);
  const canMake = ranked.filter(r => r.missing.length === 0);
  const almost = ranked.filter(r => r.missing.length >= 1 && r.missing.length <= 2).slice(0, 8);
  const others = ranked.filter(r => r.missing.length > 2).slice(0, 6);

  const renderGroup = (el, list, emptyText) => {
    el.innerHTML = '';
    if (!list.length) {
      el.innerHTML = `<div class="empty-results">${emptyText}</div>`;
      return;
    }
    list.forEach(r => el.appendChild(resultCard(r)));
  };

  renderGroup(canMakeList, canMake, 'No complete matches yet. Check the near-matches below.');
  renderGroup(almostList, almost, 'No dinners are within two missing ingredients.');
  renderGroup(otherMatches, others, 'No additional matches found.');
}

function renderDetected(items) {
  detectedIngredients.innerHTML = '';
  if (!items.length) {
    detectedIngredients.innerHTML = '<span class="ingredient-chip">No ingredients detected</span>';
    return;
  }
  items.forEach(item => {
    const chip = document.createElement('span');
    chip.className = 'ingredient-chip';
    chip.textContent = item;
    detectedIngredients.appendChild(chip);
  });
}

function renderPreviews() {
  previewGrid.innerHTML = '';
  pantryFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.alt = `Preview of ${file.name}`;
    img.onload = () => URL.revokeObjectURL(img.src);
    previewGrid.appendChild(img);
  });
}

pantryPhotos.addEventListener('change', () => {
  pantryFiles = Array.from(pantryPhotos.files || []).slice(0, MAX_PANTRY_PHOTOS);
  if ((pantryPhotos.files || []).length > MAX_PANTRY_PHOTOS) {
    pantryStatus.textContent = `Using the first ${MAX_PANTRY_PHOTOS} photos.`;
  } else {
    pantryStatus.textContent = pantryFiles.length ? `${pantryFiles.length} photo${pantryFiles.length === 1 ? '' : 's'} ready to scan.` : '';
  }
  renderPreviews();
});

function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, MAX_IMAGE_SIDE / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', JPEG_QUALITY));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

scanPantryBtn.addEventListener('click', async () => {
  if (!pantryFiles.length) {
    pantryStatus.textContent = 'Add at least one pantry or refrigerator photo first.';
    return;
  }

  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    pantryStatus.textContent = 'Sign in before scanning pantry photos.';
    await refreshAuthUI();
    return;
  }

  scanPantryBtn.disabled = true;
  scanPantryBtn.textContent = 'Scanning…';
  pantryStatus.textContent = 'Preparing photos and identifying visible ingredients…';

  try {
    const images = await Promise.all(pantryFiles.map(resizeImage));
    const { data, error } = await supabaseClient.functions.invoke(AI_FUNCTION_NAME, {
      body: { images }
    });

    if (error) {
      let message = error.message || 'Pantry scan failed.';
      try {
        const details = await error.context?.json?.();
        if (details?.error) message = details.error;
        if (details?.message) message = details.message;
      } catch (_) {}
      throw new Error(message);
    }

    const rawIngredients = Array.isArray(data?.ingredients) ? data.ingredients : [];
    const ingredients = rawIngredients
      .map(item => typeof item === 'string' ? item : item?.name)
      .filter(Boolean);

    renderDetected(ingredients);
    renderMatches(ingredients);
    pantryStatus.textContent = `Found ${ingredients.length} visible ingredient${ingredients.length === 1 ? '' : 's'}. Results are estimates—double-check quantities before cooking.`;
  } catch (error) {
    pantryStatus.textContent = `Could not scan pantry: ${error.message}`;
  } finally {
    const { data: { session: latestSession } } = await supabaseClient.auth.getSession();
    scanPantryBtn.disabled = !latestSession;
    scanPantryBtn.textContent = '✨ Scan ingredients';
  }
});

clearPantryBtn.addEventListener('click', () => {
  pantryPhotos.value = '';
  pantryFiles = [];
  previewGrid.innerHTML = '';
  pantryStatus.textContent = '';
  detectedIngredients.innerHTML = '<span class="ingredient-chip">Upload photos to begin</span>';
  canMakeList.innerHTML = '<div class="empty-results">No pantry scan yet.</div>';
  almostList.innerHTML = '<div class="empty-results">Near-matches will appear here.</div>';
  otherMatches.innerHTML = '<div class="empty-results">Other dinner ideas will appear here.</div>';
});

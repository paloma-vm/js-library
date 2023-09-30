// Functions
// BASE FUNCTION
async function getRecipesByQuery(path, limit = 3) {
  try {
    const res = await fetch(path);
    const json = await res.json();

    // slice limits recipes Edamam default 20
    const recipes = json.hits.slice(0, limit).map((hit) => {
      const recipeInfo = {
        name: hit.recipe.label,
        link: hit.recipe.url,
      };
      return recipeInfo;
    });

    return recipes;
  } catch (error) {
    return error;
  }
}

// other functions

async function getRecipes(searchInput, appId, appKey) {
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`;
  return getRecipesByQuery(path);
}

async function getRecipesByQty(searchInput, appId, appKey, Qty) {
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`;
  const limit = Qty;
  return getRecipesByQuery(path, limit);
}

async function getRecipesByMaxTime(searchInput, appId, appKey, maxTime) {
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&time=${maxTime}`;
  return getRecipesByQuery(path);
}

async function getRecipesByMealType(searchInput, appId, appKey, mealType) {
  if (mealType !== 'breakfast' && mealType !== 'lunch' && mealType !== 'dinner' && mealType !== 'snack' && mealType !== 'teatime') {
    throw new Error('Please enter a valid meal type. Choose from breakfast, lunch, dinner, snack, or teatime.');
  }
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&mealType=${mealType}`;
  return getRecipesByQuery(path);
}

async function getBreakfastRecipes(searchInput, appId, appKey) {
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&mealType=Breakfast`;
  return getRecipesByQuery(path);
}

export {
  getRecipes,
  getRecipesByQty,
  getRecipesByMealType,
  getRecipesByMaxTime,
  getBreakfastRecipes,
};

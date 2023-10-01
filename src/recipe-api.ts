// Functions
// BASE FUNCTION
interface RecipeHit {
  recipe: {
    label: string;
    url: string;
  };
}

async function getRecipesByQuery(path: string, limit: number = 3) {
  try {
    const res = await fetch(path);
    const json = await res.json();

    // slice limits the number of recipes, Edamam default is 20
    const recipes = json.hits.slice(0, limit).map((hit: RecipeHit) => {
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

async function getRecipes(searchInput: string, appId: string, appKey: string) {
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`;
  return getRecipesByQuery(path);
}

async function getRecipesByQty(searchInput: string, appId: string, appKey: string, Qty: number) {
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`;
  const limit = Qty;
  return getRecipesByQuery(path, limit);
}

async function getRecipesByMaxTime(searchInput: string, appId: string, appKey: string, maxTime: number) {
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&time=${maxTime}`;
  return getRecipesByQuery(path);
}

async function getRecipesByMealType(searchInput: string, appId: string, appKey: string, mealType: string) {
  if (mealType !== 'breakfast' && mealType !== 'lunch' && mealType !== 'dinner' && mealType !== 'snack' && mealType !== 'teatime') {
    throw new Error('Please enter a valid meal type. Choose from breakfast, lunch, dinner, snack, or teatime.');
  }
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&mealType=${mealType}`;
  return getRecipesByQuery(path);
}

async function getBreakfastRecipes(searchInput: string, appId: string, appKey: string) {
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&mealType=Breakfast`;
  return getRecipesByQuery(path);
}

// export modules
  module.exports.getRecipes = getRecipes;
  module.exports.getRecipesByQty = getRecipesByQty;
  module.exports.getRecipesByMealType = getRecipesByMealType;
  module.exports.getRecipesByMaxTime = getRecipesByMaxTime;
  module.exports.getBreakfastRecipes = getBreakfastRecipes;


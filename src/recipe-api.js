var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Functions
// BASE FUNCTION
function getRecipesByQuery(path, limit = 3) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(path);
            const json = yield res.json();
            // slice limits the number of recipes, Edamam default is 20
            const recipes = json.hits.slice(0, limit).map((hit) => {
                const recipeInfo = {
                    name: hit.recipe.label,
                    link: hit.recipe.url,
                };
                return recipeInfo;
            });
            return recipes;
        }
        catch (error) {
            return error;
        }
    });
}
// other functions
function getRecipes(searchInput, appId, appKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`;
        return getRecipesByQuery(path);
    });
}
function getRecipesByQty(searchInput, appId, appKey, Qty) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`;
        const limit = Qty;
        return getRecipesByQuery(path, limit);
    });
}
function getRecipesByMaxTime(searchInput, appId, appKey, maxTime) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&time=${maxTime}`;
        return getRecipesByQuery(path);
    });
}
function getRecipesByMealType(searchInput, appId, appKey, mealType) {
    return __awaiter(this, void 0, void 0, function* () {
        if (mealType !== 'breakfast' && mealType !== 'lunch' && mealType !== 'dinner' && mealType !== 'snack' && mealType !== 'teatime') {
            throw new Error('Please enter a valid meal type. Choose from breakfast, lunch, dinner, snack, or teatime.');
        }
        const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&mealType=${mealType}`;
        return getRecipesByQuery(path);
    });
}
function getBreakfastRecipes(searchInput, appId, appKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&mealType=Breakfast`;
        return getRecipesByQuery(path);
    });
}
export { getRecipes, getRecipesByQty, getRecipesByMealType, getRecipesByMaxTime, getBreakfastRecipes, };

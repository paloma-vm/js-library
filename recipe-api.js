// Functions

async function getRecipes(searchInput, appId, appKey) {
    const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`
    return getRecipesByQuery(path)
}

async function getRecipesByQty(searchInput, appId, appKey, Qty) {
    const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`
    const limit = Qty
    return getRecipesByQuery(path, limit)
}

// async function getRecipesByTime(searchInput, appId, appKey, limit = 3) {         
//     // v2
//     const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`
// }

// async function getRecipesByMealType(searchInput, appId, appKey, limit = 3, mealType) {
//     const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&mealType=${mealType}`
//     return getRecipes(path)
// }

async function getBreakfastRecipes(searchInput, appId, appKey, limit = 3) {
    const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}&mealType=Breakfast`
    return getRecipesByQuery(path)
}


// BASE FUNCTION
async function getRecipesByQuery(path, limit = 3) {         

    try {
        const res = await fetch(path)
        const json = await res.json()
        
        const recipes = json.hits.slice(0, limit).map(hit => { // slice limits the number of recipes returned
            const recipeInfo = {
                name: hit.recipe.label,
                link: hit.recipe.url
            }
            return recipeInfo
        })
       
        return recipes
    }  catch (error) {
        return error
    }
}

export {
    getRecipes,
    getRecipesByQty
}
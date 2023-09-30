// Functions
// async function getRecipesByMeal()


// BASE FUNCTION
async function getRecipes(searchInput, appId, appKey) {         
    // v2
    const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${appId}&app_key=${appKey}`

    try {
        const res = await fetch(path)
        const json = await res.json()
        
        const recipes = json.hits.map(hit => {
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
    getRecipes
}
// Functions
// async function getRecipesByMeal()


// BASE FUNCTION
async function getRecipes(searchInput, AppId, AppKey) {         
    // v2
    const path = `https://api.edamam.com/api/recipes/v2search?q=${searchInput}&app_id=${AppId}&app_key=${AppKey}&from=0&to=3`
    // gives up to 3 recipes
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
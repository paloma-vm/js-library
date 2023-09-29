// Functions
// async function getRecipesByMeal()


// BASE FUNCTION
async function getRecipes(searchInput, APP_ID, APP_KEY) {         
    // v1
    // gives up to 3 recipes
    const path = `https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3`
    
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
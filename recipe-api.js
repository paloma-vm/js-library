async function getRecipes(searchInput, APP_ID, APP_KEY, success, error) {
            
    // v1
    // gives up to 15 recipes
    const path = `https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15`
    
    
    const res = await fetch(path)
    const json = await res.json()

    return json
}
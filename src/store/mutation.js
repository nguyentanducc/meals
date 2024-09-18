export  function setSearchedMeals(state,meals){
    state.searchedMeals = meals ||[]
}
export  function setMealsByMeals(state,meals){
    state.mealsByLetter = meals ||[]
}
export  function setMealsByIngredients(state,meals){
    state.mealsByIngredient = meals ||[]
}
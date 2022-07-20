import { Ingridient, stubIngridients } from "../database/stubIngridients";
import { Recipe, stubRecipes } from "../database/stubRecipes";
import { SuggestionsRequest } from "../domain/SuggestionRequest";

export function findSuggestions() {
    return stubRecipes.filter(recipe => hasIngridients(recipe, stubIngridients) && hasQuantityAvailable(recipe, stubIngridients));
}

function hasIngridients(r: Recipe, is: Array<Ingridient>) {
    return r.ingridients.flatMap(ing => ing.name).every(key => is.flatMap(i=>i.name).includes(key));
}

function hasQuantityAvailable(recipe: Recipe, ingridients: Array<Ingridient>) {
    let enough = false;
    recipe.ingridients.forEach(ri => {

        let item = ingridients.find( i => i.name == ri.name);
        
        if( item == undefined){
            return false;
        }
        
        enough = item.quantity >= ri.quantity; 
    });

    return enough;
}

export function takeSuggestions(suggestions: SuggestionsRequest) : void {
    suggestions.recipeIds.forEach(item => {
        stubRecipes.find(r => r.id == item)?.ingridients.forEach(ing => {
            stubIngridients.filter(i => i.id == ing.id).map(i => {i.quantity -= ing.quantity});
        });
    });
}
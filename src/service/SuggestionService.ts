import { prisma } from "../prisma";


// TODO: Rreview implementation. Taking a step back.
export async function findSuggestions() {
    // let availableIngridients : Ingridient[] = await prisma.ingridient.findMany();
    // let recipes : IngredientsOnRecipe[] = await prisma.ingridientsOnRecipe.findMany({include: {recipe: true}});

    // let recipes : Recipe[] = await prisma.recipe.findMany({include: {ingridients: true,}});

    // return recipes.filter(recipe => hasIngridients(recipe, availableIngridients) && hasQuantityAvailable(recipe, availableIngridients));
}

// function hasIngridients(recipe, is: Array<Ingridient>) {
//     return recipe.ingridients.flatMap(ing => ing.name).every(key => is.flatMap(i=>i.name).includes(key));
// }

// function hasQuantityAvailable(recipe: Recipe, ingridients: Array<Ingridient>) {
//     let enough = false;
//     recipe.ingridients.forEach(ri => {

//         let item = ingridients.find( i => i.name == ri.name);
        
//         if( item == undefined){
//             return false;
//         }
        
//         enough = item.quantity >= ri.quantity; 
//     });

//     return enough;
// }

// export function takeSuggestions(suggestions: SuggestionsRequest) : void {
    // suggestions.recipeIds.forEach(item => {
    //     stubRecipes.find(r => r.id == item)?.ingridients.forEach(ing => {
    //         stubIngridients.filter(i => i.id == ing.id).map(i => {i.quantity -= ing.quantity});
    //     });
    // });
// }
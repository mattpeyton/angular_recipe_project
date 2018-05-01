import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Salad",
      "It's a great salad",
      "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      [
        new Ingredient('Lettuce', 1),
        new Ingredient('Tomatos', 4)
      ]),
    new Recipe(
      "Salad",
      "It's a great salad", "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      [new Ingredient("Chicken", 1),
       new Ingredient('Mayonnaise', 1)
     ])
  ];
  constructor(private slService: ShoppingListService){}
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
    console.log('added');
  };
}

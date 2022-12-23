
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class WishListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  IngList: Ingredient[] = []
  private ingredients:Ingredient[] = [
    new Ingredient('Apples',10),
    new Ingredient('Mangoes',15)
  ];
    
  getIngriedents = () => {
    return this.ingredients
  }
      

  addIngred = (ingredient :Ingredient) =>{
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients)
    console.log(this.ingredients.slice(),"After Adding")
  }

  addIngredtoWL = (ingredient:Ingredient[]) => {
    this.ingredients.push(...ingredient)
    this.ingredientsChanged.emit(this.ingredients);
    console.log(this.ingredients);
  }
  
}
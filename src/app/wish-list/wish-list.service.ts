import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class WishListService{
    ingredients:Ingredient[] = [
        new Ingredient('Apples',10),
        new Ingredient('Mangoes',15)
      ];
    
      getIngriedents(){
        return this.ingredients
      }
    

    addIngred(ing :Ingredient){
        this.ingredients.push(ing)
    }
}

import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { WishListService } from "../wish-list/wish-list.service";
import { Grocery } from "./grocery.model";
@Injectable()
export class GroceryService{
    constructor(private wishListservice: WishListService) { }
    getEmitList = new EventEmitter<Grocery>();
    private grocerys : Grocery[] = [
        new Grocery(
            "TEA",
            "Grosery Description",
            "https://tse3.mm.bing.net/th?id=OIP.C6T-AuN0IB9P2Fy2KnjXZQHaD4&pid=Api&P=0",
            [ new Ingredient('Milk', 20),
              new Ingredient('water', 20),
              new Ingredient('yelachi', 20),
              new Ingredient('sugar', 20)]), 
        new Grocery("Spices","Grosery Description1","https://tse3.mm.bing.net/th?id=OIP.h-PFztJ1CXo_dog0h0-nIQHaE8&pid=Api&P=0",[new Ingredient('Karam', 4),new Ingredient('Pasupu', 4),new Ingredient('yelachi', 4),new Ingredient('Biriyani Leavas', 4)]),
        new Grocery("Sugar","Grosery Description2","https://tse4.mm.bing.net/th?id=OIP.83TM2GAfNRwiJ3zDMqPPSAHaE8&pid=Api&P=0",[ new Ingredient('SugarCane', 3),new Ingredient('jaggery', 4)]),
        new Grocery("Coffee","Grosery Description3","https://tse2.mm.bing.net/th?id=OIP.ePTMEDo_KotVIYP-e_kNEwHaE8&pid=Api&P=0",[new Ingredient('Milk', 18),new Ingredient('coffebeans', 4),new Ingredient('Sugar', 4)])
      ];
      
    getGroceries(){
        return this.grocerys.slice();
    }

    getIngtoWishlist(ingredient :Ingredient[]){
        console.log(ingredient);
        this.wishListservice.addIngredtoWL(ingredient)
    }
    
}
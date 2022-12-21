import { EventEmitter } from "@angular/core";
import { Grocery } from "./grocery.model";

export class GroceryService{
    grocerys : Grocery[] = [
        new Grocery("TEA","Grosery Description","https://tse3.mm.bing.net/th?id=OIP.C6T-AuN0IB9P2Fy2KnjXZQHaD4&pid=Api&P=0"), 
        new Grocery("Spices","Grosery Description1","https://tse3.mm.bing.net/th?id=OIP.h-PFztJ1CXo_dog0h0-nIQHaE8&pid=Api&P=0"),
        new Grocery("Sugar","Grosery Description2","https://tse4.mm.bing.net/th?id=OIP.83TM2GAfNRwiJ3zDMqPPSAHaE8&pid=Api&P=0"),
        new Grocery("Coffee","Grosery Description3","https://tse2.mm.bing.net/th?id=OIP.ePTMEDo_KotVIYP-e_kNEwHaE8&pid=Api&P=0")
      ];
    getGroceries(){
        return this.grocerys.slice();
    }

    getEmitList = new EventEmitter<Grocery>();
}
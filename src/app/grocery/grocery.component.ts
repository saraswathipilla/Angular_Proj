import { Component, OnInit } from '@angular/core';
import { Grocery } from './grocery.model';
import { GroceryService } from './grocery.service';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
  providers: [GroceryService]
})
export class GroceryComponent implements OnInit {
  constructor(private groceryService :GroceryService) { }
  grocerySelected: Grocery
  ngOnInit(): void {
    this.groceryService.getEmitList.subscribe(
      (grocery : Grocery) =>{
        this.grocerySelected = grocery;
      }
    )
  }

}

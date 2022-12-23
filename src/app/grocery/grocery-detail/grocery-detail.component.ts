import { Component, Input, OnInit } from '@angular/core';
import { WishListService } from 'src/app/wish-list/wish-list.service';
import { Grocery } from '../grocery.model';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.css']
})
export class GroceryDetailComponent implements OnInit {
  @Input() grocery : Grocery
  constructor(private groceryService : GroceryService) { }

  ngOnInit(): void {
  }
  onClickAddIng(){
    this.groceryService.getIngtoWishlist(this.grocery.ingredient)
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { WishListService } from './wish-list.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  providers: [WishListService]
})
export class WishListComponent implements OnInit {
  List: Ingredient[];
  constructor(private wishlistService: WishListService) { }
  
  
  ngOnInit() {
    this.List = this.wishlistService.getIngriedents()
    this.wishlistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.List = ingredients; 
      }
    );
  }
  
}

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
  ingredients: Ingredient[]


  constructor(private wishlistService : WishListService) { }
  
  ngOnInit(): void {
    this.ingredients = this.wishlistService.getIngriedents()
  }
  
}

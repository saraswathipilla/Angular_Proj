import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { WishListService } from './wish-list.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  providers: [WishListService]
})
export class WishListComponent implements OnInit {
  @Input() ingredients: Ingredient[];
  constructor(private wishlistService: WishListService) { }
  
  
  ngOnInit() {
    this.ingredients = this.wishlistService.getIngriedents()
    this.wishlistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        console.log(this.ingredients,"Listt")
      }
    );
  }
  
}

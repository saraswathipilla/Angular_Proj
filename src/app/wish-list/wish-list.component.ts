import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
ingredients:Ingredient[] = [
  new Ingredient('Apples',10),
  new Ingredient('Mangoes',15)
];
  constructor() { }

  ngOnInit(): void {
  }

}

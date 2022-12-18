import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery.model';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  grocerys : Grocery[] = [
    new Grocery("grocery Name","Groder Description","https://m.media-amazon.com/images/I/51dE378i-zL._SX522_.jpg"), 
    new Grocery("grocery Name","Groder Description","https://m.media-amazon.com/images/I/51dE378i-zL._SX522_.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

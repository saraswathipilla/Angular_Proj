
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroceryService } from '../grocery.service';

import { Grocery } from '../grocery.model';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
export class GroceryListComponent implements OnInit {
  // @Output() wasEmittedList = new EventEmitter<Grocery>()
  grocerys: Grocery[];
  // @Input() grocerys: Grocery
  constructor(private groceryService : GroceryService) { }
  ngOnInit(): void {
    this.grocerys = this.groceryService.grocerys;
  }
}

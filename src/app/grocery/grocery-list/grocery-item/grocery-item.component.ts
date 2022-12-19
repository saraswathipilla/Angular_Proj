import { Component, Input, OnInit } from '@angular/core';
import { Grocery } from '../../grocery.model';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  constructor() { }
  @Input() grocery: Grocery
  ngOnInit(): void {
  }

}

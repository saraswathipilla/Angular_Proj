import { Component, Input, OnInit } from '@angular/core';
import { Grocery } from '../grocery.model';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.css']
})
export class GroceryDetailComponent implements OnInit {
  @Input() grocery : Grocery
  constructor() { }

  ngOnInit(): void {
  }
  
}

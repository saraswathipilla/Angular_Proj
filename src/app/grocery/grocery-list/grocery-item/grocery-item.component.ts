
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Grocery } from '../../grocery.model';
import { GroceryService } from '../../grocery.service';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  constructor(private groceryService: GroceryService) { }
  // @Output() emitList = new EventEmitter<void>();
  @Input() grocery: Grocery
  ngOnInit(): void {
  }
  onClickList(){
    this.groceryService.getEmitList.emit(this.grocery)
  }
}

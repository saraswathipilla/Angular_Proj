import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-wish-edit',
  templateUrl: './wish-edit.component.html',
  styleUrls: ['./wish-edit.component.css']
})
export class WishEditComponent implements OnInit {
  @Output() EmitWish = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private wishlistService: WishListService) { }

  ngOnInit() {
  }
  onClickAdd(){
    const IngName  = this.nameInputRef.nativeElement.value;
    const IngAmount = this.amountInputRef.nativeElement.value;
    const List  = new Ingredient(IngName, IngAmount);
    this.wishlistService.addIngred(List);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { GroceryComponent } from './grocery/grocery.component';
import { GroceryListComponent } from './grocery/grocery-list/grocery-list.component';
import { GroceryDetailComponent } from './grocery/grocery-detail/grocery-detail.component';
import { GroceryItemComponent } from './grocery/grocery-list/grocery-item/grocery-item.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishEditComponent } from './wish-list/wish-edit/wish-edit.component';
import { appDropdownDirective } from './shared/dropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroceryComponent,
    GroceryListComponent,
    GroceryDetailComponent,
    GroceryItemComponent,
    WishListComponent,
    WishEditComponent,
    appDropdownDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

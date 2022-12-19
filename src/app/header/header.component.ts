import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navCompSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onselectNavComp(navComp : string){
    this.navCompSelected.emit(navComp);
  }
  
}

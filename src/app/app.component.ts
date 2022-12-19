import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  loadedComp = "grocery";
  title = 'Hello App';
  onNavigate(navSelected : string){
    this.loadedComp = navSelected;
  }
}

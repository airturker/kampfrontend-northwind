import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //index.html de böyle tanımla
  templateUrl: './app.component.html', //kimin componentisin
  styleUrls: ['./app.component.css']  //still lerini tutar. bir dizidir.
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'türker özakıncı';
  

}

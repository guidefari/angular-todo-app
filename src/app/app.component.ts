import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Fatso';

  constructor() {
    this.name = 'Big man'
    this.changeName('Bigger person')
  }

  changeName(name:string):void {
    this.name= name
  }
}



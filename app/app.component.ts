import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Where keg </h1>
      <h1>This is the Keg List component</h1>
      <keg-list [kegList]="kegs"></keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg('DoubleMt Kolsh', 0, 5),
      new Keg('Occidental', 1, 5),
      new Keg('Rainier', 2, 2),
      new Keg('Rolling Rock', 2, 4)
    ];
    console.log(this.kegs, "this is kegs?");
  }
}

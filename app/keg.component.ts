import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="each-keg" (click)="pourPint()"  [class.medium]="keg.price < 5" [class.cheap]="keg.price < 3">
      <h1>{{ keg.name }}</h1>
      <label> -> Pint Left: {{ keg.pints }} <\- <br> Price: \$ {{ keg.price }}  </label>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
  pourPint(): void {
    this.keg.pints -= 1;
  }
}

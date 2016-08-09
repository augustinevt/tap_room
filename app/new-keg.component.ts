import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmit'],
  template: `
    <div>
      <h3>Create keg</h3>
      <input placeholder='name' #newName>
      <input placeholder='cost' #newCost>
      <button (click)="addKeg(newName, newCost)">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmit: EventEmitter<any[]>;
  constructor(){
    this.onSubmit = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newCost: HTMLInputElement) {
    this.onSubmit.emit([newName.value, newCost.value])
    console.log(newCost.value);
    newCost.value = '';
    console.log(newName.value);
    newName.value = '';
  }
}

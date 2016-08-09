import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <h3>Edit Keg Details: </h3>
    <label>Change Name:</label>
    <input [(ngModel)]="keg.name" value="keg.name">
    <label>Change Price:</label>
    <input [(ngModel)]="keg.price" value="keg.price">
  `
})
export class EditKegComponent {
  public keg: Keg;
}

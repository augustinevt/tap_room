import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { KegComponent } from './keg.component';
import { EditKegComponent} from './edit-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [ NewKegComponent, KegComponent, EditKegComponent ],
  templateUrl: 'app/keg-list.component.html'
})

export class KegListComponent {
  public kegList: Keg[];
  public selectedKeg: Keg;
  createKeg(args: any[]) {
    this.kegList.push(
       new Keg(args[0], this.kegList.length, parseInt(args[1]))
    );
  }
  kegClicked(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
    console.log(clickedKeg.name);
  }
}

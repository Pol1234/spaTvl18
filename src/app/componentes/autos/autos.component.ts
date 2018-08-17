import { Component } from '@angular/core';
import { AutosService } from '../../autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent {

  AllAutos: any[]= [];
  results: any[] = [];

  constructor(private _autosServ: AutosService) {

    this._autosServ.getAutos()
    .subscribe( (data: any) => {
      console.log(data);
      this.AllAutos = data;
    });
  }


}

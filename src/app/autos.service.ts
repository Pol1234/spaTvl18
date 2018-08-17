import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



const ApiKey = 'zSk3AyhLZHoyJI0geVhDT5JgyaLChAGx';
  // tslint:disable-next-line:max-line-length
const urlAmadeus = `http://api.sandbox.amadeus.com`;
const urlAutos = `${ urlAmadeus }/v1.2/cars/search-airport?apikey=${ApiKey}&location=NCE&pick_up=2018-12-07&drop_off=2018-12-08`;
let element: any[] = [];


@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor( private http: HttpClient) { 
    console.log('Autos service listo!!');
  }

  getAutos() {
  return  this.http.get(urlAutos)
  .pipe( map (data => {   
    return data['results'];
  }));
  }
}

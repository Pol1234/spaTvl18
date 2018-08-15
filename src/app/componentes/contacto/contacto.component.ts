import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  constructor() { }


  guardar( forma: NgForm ) {
    console.log('formulario guardado');
    console.log('ngForm', forma);
    console.log(' Valor' , forma.value);
  }

}

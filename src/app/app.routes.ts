import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './componentes/home/home.component';
import { PaquetesComponent } from './componentes/paquetes/paquetes.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


const APP_ROUTES: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Paquetes', component: PaquetesComponent },
    { path: 'Sobre nosotros', component: AboutComponent },
    { path: 'Contacto', component: ContactoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
  
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
// tslint:disable-next-line:class-name
export class APP_ROUTING {}

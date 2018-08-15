import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { APP_ROUTING } from './app.routes';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { PaquetesComponent } from './componentes/paquetes/paquetes.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { HotelesComponent } from './componentes/hoteles/hoteles.component';
import { AutosComponent } from './componentes/autos/autos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PaquetesComponent,
    AboutComponent,
    ContactoComponent,
    FooterComponent,
    SliderComponent,
    HotelesComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

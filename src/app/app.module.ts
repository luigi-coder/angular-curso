import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { ContadorComponent } from './contador/contador1/contador.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  // COMPONENTES QUE ESTAMOS UTILIZANDO
  declarations: [
    AppComponent,
  ],
  // TODOS NUESTROS MODULOS 
  imports: [
    BrowserModule,
    // importamos la class de heroes.module.ts
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent] // ESTE ES EL MODULO PRINCIPAL
})
export class AppModule { }

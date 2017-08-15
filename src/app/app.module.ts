import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculadoraEstagioComponent } from './calculadora-estagio/calculadora-estagio.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraEstagioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

//coloquei o first component abaixo em declarations para aparecer na tela e precisa fazer a importação acima
@NgModule({ //NgModule é um decorator
  declarations: [ //metadado
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //serviços que ficarão disponíveis para os componentes
  bootstrap: [AppComponent] //component que deve ser instanciado 
})
export class AppModule { }

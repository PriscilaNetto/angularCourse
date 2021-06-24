import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //prepara a aplicação para rodar no browser

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

//coloquei o first component abaixo em declarations para aparecer na tela e precisa fazer a importação acima
@NgModule({ //NgModule é um decorator que faz parte do angular core.
  declarations: [ //metadado aqui é colocado todas as diretrizes, pipes e componentes que queremos usar nesse módulos
    AppComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    CursosModule //tive que importar aqui para que fosse possível ser vísivel em tela.
  ],
  providers: [CursosService], //serviços que ficarão disponíveis para os componentes declarados no módulo
  bootstrap: [AppComponent] //component que deve ser instanciado quando executar a aplicação
})
export class AppModule { }

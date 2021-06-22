import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

//módulo de funcionalidade

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [ //quais são as declarações, diretivas, pipes do módulo que quero expor para outros módulos
    CursosComponent // o cursoDetalhe como não foi exportado fica como se fosse um módulo privado nem 
                    // todos o módulos poderão usá-lo
  ]
})
export class CursosModule { }
  
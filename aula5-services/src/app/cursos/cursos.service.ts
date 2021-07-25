import { Injectable, EventEmitter } from "@angular/core";


@Injectable()
export class CursosService{

  private cursos: string[] = ['Marcenaria', 'Jardinagem', 'Barista'];

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  constructor(){
    console.log('CursosService'); //qtas vezes a classe serviço está sendo instanciada

  }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}

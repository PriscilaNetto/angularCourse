import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

  private cursos: string[] = ['Marcenaria', 'Jardinagem', 'Barista'];

  constructor(){
    console.log('CursosService'); //qtas vezes a classe serviço está sendo instanciada

  }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}

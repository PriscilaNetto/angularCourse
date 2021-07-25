import { LogServiceService } from './../shared/log-service.service';
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CursosService{

  private cursos: string[] = ['Marcenaria', 'Jardinagem', 'Barista'];

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  constructor(private logService: LogServiceService)
  {
    console.log('CursosService'); //qtas vezes a classe serviço está sendo instanciada

  }

  getCursos(){
   this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;

  }

  addCurso(curso: string){
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}

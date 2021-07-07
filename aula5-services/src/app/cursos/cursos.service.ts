import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{
  getCursos(){
    return ['Marcenaria', 'Jardinagem', 'Barista'];
  }
}

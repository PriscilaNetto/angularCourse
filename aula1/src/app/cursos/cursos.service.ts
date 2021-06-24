import { Injectable } from '@angular/core';

@Injectable({ //é um decorator que possibilita que a classe seja injetada em outra classe para que possa ser usada
  providedIn: 'root'
})
export class CursosService {
  

  constructor() {}
    getCursos() {
    return ['Front-end', 'Back-end', 'Cloud'] 
    }
}


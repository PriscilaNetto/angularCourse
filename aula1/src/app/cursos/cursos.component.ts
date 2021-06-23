import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string; //declaração de variável e tipagem
  cursos: string [] = ['Front-end', 'Back-end', 'Cloud'] //declaração de uma array

  constructor() { 
    this.nomePortal = 'https://www.alura.com.br'; //inicializa a var através do this 
  }

  ngOnInit(): void {
  }

}

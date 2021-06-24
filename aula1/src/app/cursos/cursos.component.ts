import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string; //declaração de variável e tipagem
  cursos: string []; //declaração de uma array

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'https://www.alura.com.br'; //inicializa a var através do this 

    // var servico = new CursosService(); como se istancia uma classe de forma manual

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

} 

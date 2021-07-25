
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  //providers:[CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursosService = new CursosService();
    //this.cursosService = _cursosService; ex de injeção de dependência
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe( //qdo se inscreve será notificado qdo emitir um novo valor
    curso => this.cursos.push(curso)
    //curso => console.log(curso) // exemplo de arrow func.
    )


    // function(curso){
    //   console.log(curso);

    }
  }



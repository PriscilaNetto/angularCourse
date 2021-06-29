import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent implements OnInit {

  cursos:string[]= ["Fotografia"];

  mostrarCursos : boolean = false;


  constructor() {

  }

  ngOnInit(): void {
  }
    onMostrarCursos(){
     this.mostrarCursos = !this.mostrarCursos;
    }
  }


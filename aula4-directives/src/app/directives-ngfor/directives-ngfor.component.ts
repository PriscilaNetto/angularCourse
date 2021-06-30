import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngfor',
  templateUrl: './directives-ngfor.component.html',
  styleUrls: ['./directives-ngfor.component.scss']
})
export class DirectivesNgforComponent implements OnInit {

  cursos: string[] = ["Fotografia", "Confeitaria", "Pintura"]

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i]
    }

  }

}

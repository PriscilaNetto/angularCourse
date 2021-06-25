import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: any = "José";

  pessoa: any = {
    nome: 'Ada',
    idade: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.scss']
})
export class DirectiveNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit(): void {
  }
  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}

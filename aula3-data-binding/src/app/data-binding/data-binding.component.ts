import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://www.alura.com.br';
  cursoAngular: boolean = true;
  cidadeVisitar: string = 'http://lorempixel.com/640/480/city/'
  meuHobby: string = "viajar"
  //para colocar o item abaixo no template
  valorAtual: string = '';
  valorSal: string = '';

  isMouseOver: boolean = false;

  getValor() {
    return 5;
  }
  getCurtirCurso (){
    return false;
  }

  botaoClicado() {
    alert('Olá tudo bem?')
  }
  onKeyUp(evento: KeyboardEvent){ //dessa forma estou disponibilizando para que seja usado no template
    this.valorAtual= (<HTMLInputElement>evento.target).value;
  }

  valorSalvo(valor: string){
    this.valorSal = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

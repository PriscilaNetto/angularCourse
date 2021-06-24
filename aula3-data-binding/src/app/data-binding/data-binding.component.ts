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

  getValor() {
    return 5;
  }
  getCurtirCurso (){
    return false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

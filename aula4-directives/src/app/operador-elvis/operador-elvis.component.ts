import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    description: 'Descrição da tarefa',
    respons: {
      usuario : null
    } //null pode ser qquer coisa, string, number etc

  }

  constructor() { }

  ngOnInit(): void {
  }

}

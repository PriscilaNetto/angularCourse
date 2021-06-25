import { Component, OnInit, OnChanges,DoCheck, AfterContentInit,
  AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit , OnChanges,DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {//boas práticas declarar as interfaces 

  @Input() valorInicial = 10;

  constructor() { 
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit(): void { //ngOnInit é o métod mais usado é feito a chamada no servidor para poder obter os dados para mostrar no template
    this.log('ngOnInit')
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
    
  }
}

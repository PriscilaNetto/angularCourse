import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p [fundoAmarelo]' //colocando o nome da tag a cor será aplicada somente nela.
})
export class FundoAmareloDirective {

//injeção de dependência com elementRef usando underscore para sinalizar que a var é private.
  constructor(private _fundoAmarelo: ElementRef,
    private _renderer: Renderer2)  {
    //console.log(this._fundoAmarelo);
    //essa forma abaixo não é recomendada
    //this._fundoAmarelo.nativeElement.style.backgroundColor = 'yellow';

    //usando o renderer é uma forma mais segura para não deixar o app vulnerável à ataques
    this._renderer.setStyle(this._fundoAmarelo.nativeElement,
      'background-color','yellow');
      }

}

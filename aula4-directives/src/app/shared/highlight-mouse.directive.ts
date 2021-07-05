import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setStyle(this._changeColor.nativeElement,'background-color','green');
    this.backgroundColor = 'green';
  }
  @HostListener('mouseout') onMouseOut() {
    //this._renderer.setStyle(this._changeColor.nativeElement,'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  // @HostBinding('style.backgroundColor')
  // backgroundColor!: string;

  //outra forma de usar o hostbinding usando método get/set

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor!: string;

  constructor(//private _changeColor: ElementRef,
    //private _renderer: Renderer2
  ){}

}

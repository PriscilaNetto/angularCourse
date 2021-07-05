import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightFull]'
})

export class HighlightFullDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setStyle(this._changeColor.nativeElement,'background-color','green');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseout') onMouseOut() {
    //this._renderer.setStyle(this._changeColor.nativeElement,'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor')
  backgroundColor!: string;

  @Input() defaultColor: string = 'blue';
  @Input('highlightFull') highlightColor: string = 'green';

  constructor() {}

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}

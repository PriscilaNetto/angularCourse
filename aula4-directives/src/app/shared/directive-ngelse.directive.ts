import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[directiveNgelse]'
})
export class DirectiveNgelseDirective {

  @Input() set directiveNgelse(condition:boolean){
    if(!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef); // renderizar a view no template
    } else{
      this._viewContainerRef.clear();
    }

  }
  constructor( private _templateRef: TemplateRef<any>,
    private _viewContainerRef : ViewContainerRef) {

  }

}

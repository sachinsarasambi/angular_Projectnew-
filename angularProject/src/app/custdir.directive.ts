import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {
  public name:string='';

  constructor(private e1:ElementRef,private render:Renderer2) {
    //this.render.setStyle(e1.nativeElement,'backgroundcolor','yellow');
    this.render.setStyle(this.e1.nativeElement, 'backgroundColor', 'yellow');
    //this.e1.nativeElement.style.color = 'red';
   }

}

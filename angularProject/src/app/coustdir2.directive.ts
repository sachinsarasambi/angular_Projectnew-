import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCoustdir2]'
})
export class Coustdir2Directive {

  constructor(private el: ElementRef, private render:Renderer2 ) {
    console.log('coustom derictives applied');

   // el.nativeElement.style.backgroundColor='gray';
   // el.nativeElement.style.display='none';

   render.setStyle(el.nativeElement,'backgroundColor','yellow')
    
   }

}

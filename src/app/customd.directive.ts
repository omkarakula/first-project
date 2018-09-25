import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomd]'
})
export class CustomdDirective {

  constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
  }

}

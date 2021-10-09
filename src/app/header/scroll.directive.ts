import { Directive, ElementRef, HostListener, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {

  open = false;

  constructor(private elementRef : ElementRef,private renderer : Renderer2) { }

  @HostListener('click') toggleOpen()
  {
    this.open = !this.open;
    let part=this.elementRef.nativeElement.parentElement.querySelector('.collapse');
    if (this.open) this.renderer.addClass(part, 'show');
    else this.renderer.removeClass(part,'show');
  }

  
  
  
}



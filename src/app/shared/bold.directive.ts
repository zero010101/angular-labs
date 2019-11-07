import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private elrf: ElementRef<any>, private render: Renderer2) {}

  @HostListener('mouseenter') onMouseHover() {
    this.render.setStyle(this.elrf.nativeElement, "font-weight", "bold");
  }

  @HostListener('mouseleave') onMouseUnhover() {
    this.render.setStyle(this.elrf.nativeElement, "font-weight", "normal");
  }
}

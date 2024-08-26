import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  standalone:true,
  selector:'[togglecart]'
})
export class ToggleCartDirective {
  constructor(private readonly el:ElementRef, private readonly renderer:Renderer2){
    console.log("Directive on ")
  }

  @HostListener('click')
  onClick(){
    this.toggleClass();
  }

  toggleClass(){
    const element = this.el.nativeElement;
    const parent = this.renderer.parentNode(element)

    const className = 'toggle';
    const classMode = 'count-mode'

    console.log(parent)
    if(element.classList.contains(className)){
      this.renderer.removeClass(element, className)
      this.renderer.removeClass(parent, classMode);
    }else{
      this.renderer.addClass(element, className)
      this.renderer.addClass(parent, classMode);
    }
  }
}

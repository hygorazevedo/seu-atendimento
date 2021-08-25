import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[responsive]'
})
export class ResponsiveDirective implements OnInit {

  constructor(private breakpoint: BreakpointObserver,
              private el: ElementRef) {}

  ngOnInit(): void {
    this.breakpoint.observe(Breakpoints.Handset)
                   .subscribe(result => {
                     if (result.matches) {
                      this.el.nativeElement.classList.add('isHandset');
                      this.el.nativeElement.classList.remove('isDesktop');
                     } else {
                      this.el.nativeElement.classList.add('isDesktop');
                      this.el.nativeElement.classList.remove('isHandset');
                     }
                   });
  }
}

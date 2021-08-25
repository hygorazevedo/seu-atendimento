import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[handset]'
})
export class HandsetDirective implements OnInit {

  olderDisplay: string;

  constructor(private breakpoint: BreakpointObserver,
              private el: ElementRef) {
    this.olderDisplay = this.el.nativeElement.style.display;
  }

  ngOnInit(): void {
    this.breakpoint.observe(Breakpoints.Handset)
                   .subscribe(result => {
                     if (!result.matches) {
                      this.el.nativeElement.style.display = 'none';
                     } else {
                      this.el.nativeElement.style.display = this.olderDisplay;
                     }
                   });
  }
}

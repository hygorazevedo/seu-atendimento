import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FeatureFlagService } from '../services/feature-flag.service';
 
@Directive({
  selector: '[removeFeatureOff]'
})
export class RemoveFeatureOffDirective implements OnInit {
  @Input('removeFeatureOff') featureName: string;
 
  constructor(private el: ElementRef,
              private featureFlagService: FeatureFlagService) {
  }
 
  ngOnInit() {
    if (!this.featureFlagService.featureOff(this.featureName)) {
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
    }
  }
}
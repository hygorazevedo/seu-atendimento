import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/stepper/services/stepper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  backwardButtonDisabled: boolean = true;
  fowardButtonDisabled: boolean = false;

  constructor(private router: Router,
              private stepperService: StepperService) { }

  handleBackward(): void {
    let steps = this.stepperService.steps$.value;
    const currentStep = steps.find(s => s.active);
    if (currentStep.id - 1 >= 1) {
      const step = steps.find(s => s.id === currentStep.id - 1);
      this.fowardButtonDisabled = false;
      this.backwardButtonDisabled = false;

      if (currentStep.id - 1 === 1) {
        this.backwardButtonDisabled = true;
      }

      this.router.navigate([step.link], { state: {id: step.id} });
    }
  }

  handleFoward(): void {
    let steps = this.stepperService.steps$.value;
    const currentStep = steps.find(s => s.active);

    if (currentStep.id + 1 <= steps.length) {
      const step = steps.find(s => s.id === currentStep.id + 1);
      this.fowardButtonDisabled = false;
      this.backwardButtonDisabled = false;

      if (currentStep.id + 1 === steps.length) {
        this.fowardButtonDisabled = true;
      }

      this.router.navigate([step.link], { state: {id: step.id} });
    }
  }

  handleViewCart(): void {
    console.log('view cart');
  }
}

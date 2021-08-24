import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Step } from 'src/app/stepper/models/step.model';
import { StepperService } from 'src/app/stepper/services/stepper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  sub: Subscription;
  backwardButtonDisabled: boolean = true;
  fowardButtonDisabled: boolean = false;

  list: Step[];

  inCart: boolean;
  currentStepName: string;

  constructor(private router: Router,
              private stepperService: StepperService) { }
  
  ngOnInit(): void {
    this.inCart = false;

    this.sub = this.stepperService.steps$.subscribe(steps => {
      this.list = steps;

      const currentStepIndex = this.list.findIndex(step => step.active);

      this.inCart = false;
      this.fowardButtonDisabled = false;
      this.backwardButtonDisabled = false;
      
      this.disableFirstOrLast(currentStepIndex);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleBackward(): void {
    this.inCart = false;

    const currentStepIndex = this.list.findIndex(step => step.active);
    const previousStepIndex = currentStepIndex - 1;

    if (previousStepIndex >= 0) {
      const step = this.list.find((value, index: number) => index === previousStepIndex);
      this.fowardButtonDisabled = false;
      this.backwardButtonDisabled = false;

      if (previousStepIndex <= 0) {
        this.backwardButtonDisabled = true;
      }

      this.stepperService.set(step.id);
    }
  }

  handleFoward(): void {
    this.inCart = false;

    const currentStepIndex = this.list.findIndex(step => step.active);
    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex <= this.list.length) {
      const step = this.list.find((value, index: number) => index === nextStepIndex);
      this.fowardButtonDisabled = false;
      this.backwardButtonDisabled = false;

      if (nextStepIndex >= this.list.length) {
        this.fowardButtonDisabled = true;
      }

      this.stepperService.set(step.id);
    }
  }

  handleViewCart(active): void {
    const currentStep = this.list.find(s => s.active);
    
    if (!active) {
      this.stepperService.set(currentStep.id);
    } else {
      this.router.navigate(['carrinho']);
    }
    this.inCart = active;
  }

  private disableFirstOrLast(index: number): void {
    if (index <= 0) {
      this.backwardButtonDisabled = true;
    }

    if (index >= this.list.length -1) {
      this.fowardButtonDisabled = true;
    }
  }
}

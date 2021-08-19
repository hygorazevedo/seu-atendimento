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

      const currentStep = this.list.find(s => s.active);

      this.inCart = false;
      this.fowardButtonDisabled = false;
      this.backwardButtonDisabled = false;
      
      this.disableFirstOrLast(currentStep.id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleBackward(): void {
    this.inCart = false;
    const currentStep = this.list.find(s => s.active);
    
    if (currentStep.id - 1 >= 1) {
      const step = this.list.find(s => s.id === currentStep.id - 1);
      this.fowardButtonDisabled = false;
      this.backwardButtonDisabled = false;

      if (currentStep.id - 1 === 1) {
        this.backwardButtonDisabled = true;
      }

      this.router.navigate([step.link], { state: {id: step.id} });
    }
  }

  handleReturnToCurrent(): void {
    this.inCart = false;

    const currentStep = this.list.find(s => s.active);

    this.router.navigate([currentStep.link], { state: {id: currentStep.id} });
  }

  handleFoward(): void {
    this.inCart = false;
    const currentStep = this.list.find(s => s.active);

    if (currentStep.id + 1 <= this.list.length) {
      const step = this.list.find(s => s.id === currentStep.id + 1);
      this.fowardButtonDisabled = false;
      this.backwardButtonDisabled = false;

      if (currentStep.id + 1 === this.list.length) {
        this.fowardButtonDisabled = true;
      }

      this.router.navigate([step.link], { state: {id: step.id} });
    }
  }

  handleViewCart(): void {
    this.inCart = true;
    const currentStep = this.list.find(s => s.active);
    this.currentStepName = `Voltar para ${currentStep.description}`;
    this.router.navigate(['carrinho']);
  }

  private disableFirstOrLast(id: number): void {
    if (id === 1) {
      this.backwardButtonDisabled = true;
    }
    if (id === this.list.length) {
      this.fowardButtonDisabled = true;
    }
  }
}

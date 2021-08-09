import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Step } from 'src/app/stepper/models/step.model';
import { StepperService } from 'src/app/stepper/services/stepper.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() type: 'foward' | 'backward';
  @Input() text: string;
  disabled: boolean = false;
  step = {} as Step;
  sub: Subscription;

  constructor(private stepperService: StepperService) { }

  ngOnInit(): void {
    this.sub = this.stepperService.steps$.subscribe(steps => {
      switch (this.type) {
        case 'backward':
          this.setupBackwardAction(steps);
          break;
        case 'foward':
          this.setupForwardAction(steps);
          break;
        default:
          throw new Error('Invalid action type');
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private setupBackwardAction(steps: Step[]): void {
    const currentStep = steps.find(s => s.active);
    if (currentStep.id - 1 >= 1) {
      this.step = steps.find(s => s.id === currentStep.id - 1);

      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  private setupForwardAction(steps: Step[]): void {
    const currentStep = steps.find(s => s.active);
    
    if (currentStep.id + 1 <= steps.length){
      this.step = steps.find(s => s.id === currentStep.id + 1);

      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
}

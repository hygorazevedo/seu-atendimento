import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Step } from 'src/app/stepper/models/step.model';
import { StepperService } from 'src/app/stepper/services/stepper.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'foward' | 'backward';
  @Input() text: string;
  stepId: number;
  path: string;
  disabled: boolean = false;

  constructor(private router: Router, private stepperService: StepperService) { }

  ngOnInit() {
    this.stepperService.steps$.subscribe((steps: Step[]) => {
      const currentStep = steps.find(s => s.active);

      if (this.type === 'foward' && currentStep.id + 1 <= steps.length){
        this.path = this.router.config[currentStep.id + 1].path;
        this.stepId = currentStep.id + 1;

        this.disabled = false;
      } else if (this.type === 'backward' && currentStep.id - 1 >= 1) {
        this.path = this.router.config[currentStep.id - 1].path;
        this.stepId = currentStep.id - 1;

        this.disabled = false;
      } else {
        this.disabled = true;
      }
    });
  }
}

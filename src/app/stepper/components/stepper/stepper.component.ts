import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { StepperService } from '../../services/stepper.service';
import { Step } from '../../models/step.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, OnDestroy {
  isHandset$: Observable<boolean>;
  steps$: Observable<Step[]>;
  progression: number;
  progressionText: string;

  sub: Subscription;

  constructor(private breakpoint: BreakpointObserver,
              private stepperService: StepperService) { }

  ngOnInit(): void {
    this.isHandset$ = this.breakpoint.observe(Breakpoints.Handset)
                                     .pipe(map(result => result.matches), shareReplay());
    this.steps$ = this.stepperService.steps$;
    this.calculateStepProgression();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleNavigate(id: number): void {
    this.stepperService.set(id);
  }

  private calculateStepProgression(): void {
    this.sub = this.stepperService.steps$.subscribe(steps => {
      const current = steps.findIndex(step => step.active) + 1;
      const size = steps.filter(step => step.active || step.done).length;
      this.progression = size * 100 / steps.length;
      this.progressionText = `${current} de ${steps.length}`;
    });
  }
}

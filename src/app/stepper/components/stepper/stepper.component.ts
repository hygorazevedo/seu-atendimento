import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
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
export class StepperComponent implements OnInit, AfterViewInit, OnDestroy {
  isHandset$: Observable<boolean>;
  steps: Step[];
  sub: Subscription;

  constructor(private breakpoint: BreakpointObserver,
              private stepperService: StepperService) { }

  ngOnInit(): void {
    this.isHandset$ = this.breakpoint.observe(Breakpoints.Handset)
                                     .pipe(map(result => result.matches), shareReplay());
  }

  ngAfterViewInit(): void {
    this.sub = this.stepperService.steps$.subscribe(steps => this.steps = steps);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

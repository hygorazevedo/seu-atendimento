import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { StepperService } from '../../services/stepper.service';
import { Step } from '../../models/step.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isHandset$: Observable<boolean>;
  steps$: Observable<Step[]>;

  constructor(private breakpoint: BreakpointObserver,
              private stepperService: StepperService,
              private router: Router) { }

  ngOnInit(): void {
    this.isHandset$ = this.breakpoint.observe(Breakpoints.Handset)
                                     .pipe(map(result => result.matches), shareReplay());
    this.steps$ = this.stepperService.steps$;
  }

  handleNavigate(route: string, id: number): void {
    this.router.navigate([route], { state: { id } });
  }
}

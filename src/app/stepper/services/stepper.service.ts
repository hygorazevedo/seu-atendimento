import { Inject, Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { Step } from "../models/step.model";
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from "rxjs/operators";

@Injectable()
export class StepperService implements OnDestroy {

  steps$ = new BehaviorSubject<Step[]>(this.steps);
  sub: Subscription;

  constructor(@Inject('steps') private steps: Step[]) {
    if(!steps || steps.length <= 0) {
     throw new Error('Steps is not defined.');
    }
    
    this.set(1);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  set(id: number): void {
    if (!this.isValidId(id)) {
      return;
    }

    this.sub = this.useRuleForComplete(id, this.steps)
        .pipe(switchMap(steps => this.useRuleForActivate(id, steps)))
        .subscribe(steps => {
          this.steps = steps;
          this.steps$.next(this.steps);
        });
  }

  reset(): void {
    this.steps = this.steps.map(s => {
      s.done = false;
      s.active = false;
      return s;
    });

    this.useRuleForActivate(1, this.steps).subscribe(steps => {
      this.steps = steps;
      this.steps$.next(this.steps);
    });
  }

  private isValidId(id: number): boolean {
    return !isNaN(id) && id > 0 && this.steps && this.steps.length > 0;
  }

  private useRuleForComplete(id: number, list: Step[]): Observable<Step[]> {
    const steps = list.map(s => {
      if (s.active || s.id < id) {
        s.done = true;
        s.active = false;
      }
      return s;
    });

    return new Observable(sender => {
      sender.next(steps);
      sender.complete();
    })
  }

  private useRuleForActivate(id: number, list: Step[]): Observable<Step[]> {
    const steps = list.map(s => {
      if (s.id === id) {
        s.active = true;
      }
      return s;
    });

    return new Observable(sender => {
      sender.next(steps);
      sender.complete();
    })
  }
}
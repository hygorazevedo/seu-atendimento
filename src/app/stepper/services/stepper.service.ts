import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Step } from "../models/step.model";

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  steps$ = new BehaviorSubject<Step[]>(this.steps);

  constructor(@Inject('steps') private steps: Step[]) {}

  set(stepId: number): void {
    if (isNaN(stepId) || stepId <= 0 || !this.steps || this.steps.length === 0) {
      return;
    }

    this.steps = this.steps.map(s => {
      if (s.id === stepId) {
        s.active = true;
        s.done = false;
      } else {
        s.active = false;
        s.done = false;
      }

      if (s.id < stepId) {
        s.done = true;
      }

      if (s.id > stepId) {
        s.done = false;
      }

      return s;
    });

    this.steps$.next([...this.steps]);
  }
}
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Step } from "../models/step.model";

@Injectable()
export class StepperService {

  steps$ = new BehaviorSubject<Step[]>(this.steps);

  constructor(@Inject('steps') private steps: Step[]) {
    this.set(1);
  }

  set(id: number): void {
    if (!this.isValidId(id)) {
      return;
    }

    this.steps = this.steps.map(s => {
      if (s.active || s.id < id) {
        s.done = true;
        s.active = false;
      }

      if (s.id === id) {
        s.active = true;
      }
      return s;
    });

    this.steps$.next(this.steps);
  }

  private isValidId(id: number): boolean {
    return !isNaN(id) && id > 0 && this.steps && this.steps.length > 0;
  }
}
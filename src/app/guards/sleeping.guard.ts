import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { StepperService } from "../stepper/services/stepper.service";

@Injectable()
export class SleepingGuard implements CanActivate {

    constructor(private router: Router,
        private stepperService: StepperService) {}

    canActivate(): boolean {
        const regra = true;
        const stepId = Number(this.router.getCurrentNavigation().extras.state);

        if (regra) {
            this.stepperService.set(stepId);
        }

        return regra;
    }
}
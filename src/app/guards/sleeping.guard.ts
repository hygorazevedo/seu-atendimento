import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { StepperService } from "../stepper/services/stepper.service";

@Injectable()
export class SleepingGuard implements CanActivate {

    constructor(private router: Router,
        private stepperService: StepperService) {}

    canActivate(): boolean {
        const regra = true;
        
        if (regra) {
            const state = { ...this.router.getCurrentNavigation().extras.state };
            this.stepperService.set(state.id);
        }

        return regra;
    }
}
import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { StepperService } from "../stepper/services/stepper.service";

@Injectable()
export class ContratoGuard implements CanActivate {

    constructor(private location: Location,
        private router: Router,
        private stepperService: StepperService) {}

    canActivate(): boolean {
        const regra = this.location.isCurrentPathEqualTo('/pagamento');
        
        if (regra) {
            const stepId = Number(this.router.getCurrentNavigation().extras.state);
            this.stepperService.set(stepId);
        } else {
            console.error('Blocked by validation! Check ContratoGuard for more details.');
        }

        return regra;
    }
}
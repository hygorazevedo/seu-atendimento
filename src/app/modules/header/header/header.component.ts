import { Component } from '@angular/core';
import { StepperService } from 'src/app/stepper/services/stepper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private stepperService: StepperService, private router: Router) { }

  handleGoHome(): void {
    this.stepperService.reset();
    this.router.navigate(['/']);
  }
}

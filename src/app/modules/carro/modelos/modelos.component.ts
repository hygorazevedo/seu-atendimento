import { Component } from '@angular/core';
import { StepperService } from 'src/app/stepper/services/stepper.service';

@Component({
  selector: 'app-modelos',
  host: { class: 'content' },
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent {
  title: string = 'Modelos';
}

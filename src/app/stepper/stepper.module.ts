import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperService } from './services/stepper.service';
import { Step } from './models/step.model';
import { RouterModule } from '@angular/router';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [StepperComponent],
  imports: [CommonModule, RouterModule, TooltipModule],
  exports: [StepperComponent]
})
export class StepperModule {
  constructor(@Optional() @SkipSelf() parentModule: StepperModule) {
    if (parentModule) {
        throw new Error('StepperModule is already loaded. Import it in the AppModule Only');
    }
  }

  static forRoot(steps: Array<Step>): ModuleWithProviders<StepperModule> {
    return {
      ngModule: StepperModule,
      providers: [
        { provide: 'steps', useValue: steps },
        StepperService
      ]
    }
  }
}

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperService } from './services/stepper.service';
import { Step } from './models/step.model';
import { RouterModule } from '@angular/router';
import { ActivePipe } from './pipes/active.pipe';
import { CountPipe } from './pipes/count.pipe';
import { PositionPipe } from './pipes/position.pipe';
import { SharedModule } from '../modules/shared/shared.module';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';

@NgModule({
  declarations: [StepperComponent, ActivePipe, CountPipe, PositionPipe, ProgressCircleComponent],
  imports: [CommonModule, RouterModule, SharedModule],
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

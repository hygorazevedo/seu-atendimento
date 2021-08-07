import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './services/app.config';
import { RemoveFeatureOffDirective } from './directives/remove-feature-off.directive';
import { FeatureFlagService } from './services/feature-flag.service';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [RemoveFeatureOffDirective],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [RemoveFeatureOffDirective]
})
export class FeatureFlagModule {
  static forRoot(environmentName: string): ModuleWithProviders<FeatureFlagModule> {
    return {
      ngModule: FeatureFlagModule,
      providers: [
        { provide: 'environmentName', useValue: environmentName },
        AppConfig, 
        { provide: APP_INITIALIZER,
          useFactory: initializeApp,
          deps: [AppConfig], multi: true },
        FeatureFlagService
      ]
    }
  }
}

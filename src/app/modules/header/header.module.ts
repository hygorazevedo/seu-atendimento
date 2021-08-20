import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent]
})
export class HeaderModule {
  constructor(@Optional() @SkipSelf() parentModule: HeaderModule) {
    if (parentModule) {
        throw new Error('HeaderModule is already loaded. Import it in the AppModule Only');
    }
}
}

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [FooterComponent]
})
export class FooterModule {
    constructor(@Optional() @SkipSelf() parentModule: FooterModule) {
        if (parentModule) {
            throw new Error('FooterModule is already loaded. Import it in the AppModule Only');
        }
    }
}

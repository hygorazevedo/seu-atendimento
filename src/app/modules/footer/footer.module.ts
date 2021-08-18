import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from 'src/app/components/button/button.component';

@NgModule({
  declarations: [FooterComponent, ButtonComponent],
  imports: [CommonModule, MatIconModule],
  exports: [FooterComponent]
})
export class FooterModule {
    constructor(@Optional() @SkipSelf() parentModule: FooterModule) {
        if (parentModule) {
            throw new Error('FooterModule is already loaded. Import it in the AppModule Only');
        }
    }
}

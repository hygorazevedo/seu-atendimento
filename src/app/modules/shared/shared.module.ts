import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, MatIconModule],
    exports: [ButtonComponent]
})
export class SharedModule {
    constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
        if (parentModule) {
            throw new Error('SharedModule is already loaded. Import it in the AppModule Only');
        }
    }
}

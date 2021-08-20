import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [ButtonComponent, ProfileComponent],
    imports: [CommonModule, MatIconModule],
    exports: [ButtonComponent, ProfileComponent]
})
export class SharedModule {}

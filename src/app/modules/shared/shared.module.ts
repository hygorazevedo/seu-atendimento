import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './components/profile/profile.component';
import { HandsetDirective } from './directives/handset.directive';
import { DesktopDirective } from './directives/desktop.directive';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
    declarations: [ButtonComponent, ProfileComponent, HandsetDirective, DesktopDirective, ResponsiveDirective],
    imports: [CommonModule, MatIconModule],
    exports: [ButtonComponent, ProfileComponent, HandsetDirective, DesktopDirective, ResponsiveDirective]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosComponent } from './modelos/modelos.component';
import { PlacasComponent } from './placas/placas.component';

@NgModule({
  declarations: [ModelosComponent, PlacasComponent],
  imports: [CommonModule],
  exports: [ModelosComponent, PlacasComponent]
})
export class CarroModule { }

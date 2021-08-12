import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosComponent } from './modelos/modelos.component';
import { PlacasComponent } from './placas/placas.component';
import { CarroRoutingModule } from './carro-routing.module';

@NgModule({
  declarations: [ModelosComponent, PlacasComponent],
  imports: [CommonModule, CarroRoutingModule]
})
export class CarroModule { }

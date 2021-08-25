import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaRoutingModule } from './reserva-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReservasComponent,DetalhesComponent],
  imports: [CommonModule, ReservaRoutingModule, SharedModule]
})
export class ReservaModule { }

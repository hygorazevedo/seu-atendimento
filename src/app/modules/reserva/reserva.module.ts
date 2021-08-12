import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaRoutingModule } from './reserva-routing.module';

@NgModule({
  declarations: [ReservasComponent,DetalhesComponent],
  imports: [CommonModule, ReservaRoutingModule]
})
export class ReservaModule { }

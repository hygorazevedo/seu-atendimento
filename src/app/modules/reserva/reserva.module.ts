import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  declarations: [ReservasComponent,DetalhesComponent],
  imports: [CommonModule],
  exports: [ReservasComponent,DetalhesComponent]
})
export class ReservaModule { }

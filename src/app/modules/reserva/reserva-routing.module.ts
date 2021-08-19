import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { SleepingGuard } from '../shared/guards/sleeping.guard';

const routes: Routes = [
  { path: '', component: ReservasComponent, canActivate: [SleepingGuard] },
  { path: 'detalhes', component: DetalhesComponent, canActivate: [SleepingGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SleepingGuard]
})
export class ReservaRoutingModule { }
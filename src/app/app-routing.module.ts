import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoGuard } from './guards/contrato.guard';
import { SleepingGuard } from './guards/sleeping.guard';
import { ReservasComponent } from './components/reservas/reservas.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { PlacasComponent } from './components/placas/placas.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { ContratoComponent } from './components/contrato/contrato.component';

const routes: Routes = [
  { path: '', redirectTo: 'reservas', pathMatch: 'full' },
  { path: 'reservas', component: ReservasComponent, canActivate:[SleepingGuard] },
  { path: 'detalhes', component: DetalhesComponent, canActivate: [SleepingGuard] },
  { path: 'modelos', component: ModelosComponent, canActivate: [SleepingGuard] },
  { path: 'placas', component: PlacasComponent, canActivate: [SleepingGuard] },
  { path: 'pagamento', component: PagamentoComponent, canActivate: [SleepingGuard] },
  { path: 'contrato', component: ContratoComponent, canActivate: [ContratoGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

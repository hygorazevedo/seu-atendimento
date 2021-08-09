import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoGuard } from './guards/contrato.guard';
import { SleepingGuard } from './guards/sleeping.guard';
import { ReservasComponent } from './modules/reserva/reservas/reservas.component';
import { DetalhesComponent } from './modules/reserva/detalhes/detalhes.component';
import { ModelosComponent } from './modules/carro/modelos/modelos.component';
import { PlacasComponent } from './modules/carro/placas/placas.component';
import { PagamentoComponent } from './modules/pagamento/pagamento/pagamento.component';
import { ContratoComponent } from './modules/contrato/contrato/contrato.component';

const routes: Routes = [
  { path: 'reservas', component: ReservasComponent, canActivate: [SleepingGuard] },
  { path: 'detalhes', component: DetalhesComponent, canActivate: [SleepingGuard] },
  { path: 'modelos', component: ModelosComponent, canActivate: [SleepingGuard] },
  { path: 'placas', component: PlacasComponent, canActivate: [SleepingGuard] },
  { path: 'pagamento', component: PagamentoComponent, canActivate: [SleepingGuard] },
  { path: 'contrato', component: ContratoComponent, canActivate: [ContratoGuard] },
  { path: '', redirectTo: '/reservas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

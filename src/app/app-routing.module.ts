import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reservas', loadChildren: () => import('./modules/reserva/reserva.module').then(m => m.ReservaModule) },
  { path: 'modelos', loadChildren: () => import('./modules/carro/carro.module').then(m => m.CarroModule) },
  { path: 'pagamento', loadChildren: () => import('./modules/pagamento/pagamento.module').then(m => m.PagamentoModule) },
  { path: 'contrato', loadChildren: () => import('./modules/contrato/contrato.module').then(m => m.ContratoModule) },
  { path: '', redirectTo: '/reservas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

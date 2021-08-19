import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SleepingGuard } from '../shared/guards/sleeping.guard';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: '', component: PagamentoComponent, canActivate: [SleepingGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SleepingGuard]
})
export class PagamentoRoutingModule { }
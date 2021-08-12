import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SleepingGuard } from 'src/app/guards/sleeping.guard';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: '', component: PagamentoComponent, canActivate: [SleepingGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
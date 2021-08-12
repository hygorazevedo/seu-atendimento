import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoGuard } from './contrato.guard';
import { ContratoComponent } from './contrato/contrato.component';

const routes: Routes = [
  { path: '', component: ContratoComponent, canActivate: [ContratoGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratoRoutingModule { }
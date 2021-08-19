import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SleepingGuard } from '../shared/guards/sleeping.guard';
import { ContratoComponent } from './contrato/contrato.component';

const routes: Routes = [
  { path: '', component: ContratoComponent, canActivate: [SleepingGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SleepingGuard]
})
export class ContratoRoutingModule { }
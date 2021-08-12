import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SleepingGuard } from 'src/app/guards/sleeping.guard';
import { ModelosComponent } from './modelos/modelos.component';
import { PlacasComponent } from './placas/placas.component';

const routes: Routes = [
    { path: '', component: ModelosComponent, canActivate: [SleepingGuard] },
    { path: 'placas', component: PlacasComponent, canActivate: [SleepingGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarroRoutingModule { }
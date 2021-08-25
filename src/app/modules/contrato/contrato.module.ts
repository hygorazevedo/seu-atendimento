import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoRoutingModule } from './contrato-routing.module';
import { ContratoGuard } from './contrato.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContratoComponent],
  imports: [CommonModule, ContratoRoutingModule, SharedModule],
  providers: [ContratoGuard]
})
export class ContratoModule { }

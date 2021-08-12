import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoRoutingModule } from './contrato-routing.module';
import { ContratoGuard } from './contrato.guard';

@NgModule({
  declarations: [ContratoComponent],
  imports: [CommonModule, ContratoRoutingModule],
  providers: [ContratoGuard]
})
export class ContratoModule { }

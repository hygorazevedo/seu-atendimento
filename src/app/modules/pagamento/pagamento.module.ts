import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PagamentoRoutingModule } from './pagamento-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagamentoComponent],
  imports: [CommonModule, PagamentoRoutingModule, SharedModule]
})
export class PagamentoModule { }

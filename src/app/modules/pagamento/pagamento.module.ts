import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PagamentoRoutingModule } from './pagamento-routing.module';

@NgModule({
  declarations: [PagamentoComponent],
  imports: [CommonModule, PagamentoRoutingModule]
})
export class PagamentoModule { }

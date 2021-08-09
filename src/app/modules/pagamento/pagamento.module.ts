import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento/pagamento.component';

@NgModule({
  declarations: [PagamentoComponent],
  imports: [
    CommonModule
  ],
  exports: [PagamentoComponent]
})
export class PagamentoModule { }

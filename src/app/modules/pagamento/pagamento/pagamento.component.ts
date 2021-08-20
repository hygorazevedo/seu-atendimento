import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  host: { class: 'content rb' },
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent {
  title: string = 'Pagamento';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  host: { class: 'content rb' },
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  title: string = 'Carrinho';
}

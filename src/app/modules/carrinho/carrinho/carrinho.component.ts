import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  host: { class: 'content' },
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  title: string = 'Carrinho';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas',
  host: { class: 'content' },
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {
  title:string = 'Reservas';
}

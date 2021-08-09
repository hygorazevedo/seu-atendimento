import { Component } from '@angular/core';

@Component({
  selector: 'app-placas',
  host: { class: 'content' },
  templateUrl: './placas.component.html',
  styleUrls: ['./placas.component.scss']
})
export class PlacasComponent {
  title: string = 'Placas';
}

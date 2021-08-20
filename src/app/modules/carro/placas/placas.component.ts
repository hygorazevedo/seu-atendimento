import { Component } from '@angular/core';

@Component({
  selector: 'app-placas',
  host: { class: 'content rb' },
  templateUrl: './placas.component.html',
  styleUrls: ['./placas.component.scss']
})
export class PlacasComponent {
  title: string = 'Placas';
}

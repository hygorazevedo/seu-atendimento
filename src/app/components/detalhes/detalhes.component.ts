import { Component } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  host: { class: 'content' },
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent {
  title: string = 'Detalhes'
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contrato',
  host: { class: 'content' },
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent { 
  title: string = 'Contrato';
}

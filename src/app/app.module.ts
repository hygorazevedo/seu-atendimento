import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StepperModule } from './stepper/stepper.module';
import { Step } from './stepper/models/step.model';
import { ReservaModule } from './modules/reserva/reserva.module';
import { CarroModule } from './modules/carro/carro.module';
import { PagamentoModule } from './modules/pagamento/pagamento.module';
import { ContratoModule } from './modules/contrato/contrato.module';
import { FooterModule } from './modules/footer/footer.module';

const steps = [
  {
    id: 1,
    description: 'Reservas',
    active: false,
    done: false,
    link: 'reservas'
  }, 
  {
    id: 2,
    description: 'Detalhes',
    active: false,
    done: false,
    link: 'detalhes'
  },
  {
    id: 3,
    description: 'Modelos',
    active: false,
    done: false,
    link: 'modelos'
  },
  {
    id: 4,
    description: 'Placas',
    active: false,
    done: false,
    link: 'placas'
  },
  {
    id: 5,
    description: 'Pagamento',
    active: false,
    done: false,
    link: 'pagamento'
  },
  {
    id: 6,
    description: 'Contrato',
    active: false,
    done: false,
    link: 'contrato'
  }
] as Step[];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    FooterModule,
    ReservaModule,
    CarroModule,
    PagamentoModule,
    ContratoModule,
    StepperModule.forRoot(steps)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContratoGuard } from './guards/contrato.guard';
import { SleepingGuard } from './guards/sleeping.guard';
import { ButtonComponent } from './components/button/button.component';
import { StepperModule } from './stepper/stepper.module';
import { Step } from './stepper/models/step.model';
import { ReservaModule } from './modules/reserva/reserva.module';
import { CarroModule } from './modules/carro/carro.module';
import { PagamentoModule } from './modules/pagamento/pagamento.module';
import { ContratoModule } from './modules/contrato/contrato.module';

const steps = [
  {
    id: 1,
    description: 'reservas',
    active: false,
    done: false,
    link: 'reservas'
  }, 
  {
    id: 2,
    description: 'detalhes',
    active: false,
    done: false,
    link: 'detalhes'
  },
  {
    id: 3,
    description: 'modelos',
    active: false,
    done: false,
    link: 'modelos'
  },
  {
    id: 4,
    description: 'placas',
    active: false,
    done: false,
    link: 'placas'
  },
  {
    id: 5,
    description: 'pagamento',
    active: false,
    done: false,
    link: 'pagamento'
  },
  {
    id: 6,
    description: 'contrato',
    active: false,
    done: false,
    link: 'contrato'
  }
] as Step[];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    ReservaModule,
    CarroModule,
    PagamentoModule,
    ContratoModule,
    StepperModule.forRoot(steps)
  ],
  providers: [
    ContratoGuard,
    SleepingGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

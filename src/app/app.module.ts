import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContratoGuard } from './guards/contrato.guard';
import { SleepingGuard } from './guards/sleeping.guard';
import { ReservasComponent } from './components/reservas/reservas.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { PlacasComponent } from './components/placas/placas.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { ButtonComponent } from './components/button/button.component';
import { StepperModule } from './stepper/stepper.module';
import { Step } from './stepper/models/step.model';
import { FeatureFlagModule } from './feature-flag/feature-flag.module';
import { environment } from 'src/environments/environment';

const steps = [
  {
    id: 1,
    description: 'reservas',
    active: true,
    checked: true,
    done: false,
    link: 'reservas'
  }, 
  {
    id: 2,
    description: 'detalhes',
    active: false,
    checked: false,
    done: false,
    link: 'detalhes'
  },
  {
    id: 3,
    description: 'modelos',
    active: false,
    checked: false,
    done: false,
    link: 'modelos'
  },
  {
    id: 4,
    description: 'placas',
    active: false,
    checked: false,
    done: false,
    link: 'placas'
  },
  {
    id: 5,
    description: 'pagamento',
    active: false,
    checked: false,
    done: false,
    link: 'pagamento'
  },
  {
    id: 6,
    description: 'contrato',
    active: false,
    checked: false,
    done: false,
    link: 'contrato'
  }
] as Step[];

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    DetalhesComponent,
    ModelosComponent,
    PlacasComponent,
    PagamentoComponent,
    ContratoComponent,
    ButtonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FeatureFlagModule.forRoot(environment.name),
    HttpClientModule,
    NoopAnimationsModule,
    StepperModule.forRoot(steps)
  ],
  providers: [
    ContratoGuard,
    SleepingGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

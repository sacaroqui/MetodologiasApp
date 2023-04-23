import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeleccionMetodologiaComponent } from './pages/seleccion-metodologia/seleccion-metodologia.component';
import { HomeComponent } from './pages/home/home.component';
import { PMIComponent } from './pages/pmi/pmi.component';
import { Prince2Component } from './pages/prince2/prince2.component';
import { ScrumComponent } from './pages/scrum/scrum.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { MetodologiasRoutingModule } from './metodologias-routing.module';
import { NgChartsModule } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficasComponent } from './components/graficas/graficas.component';



@NgModule({
  declarations: [
    SeleccionMetodologiaComponent,
    HomeComponent,
    PMIComponent,
    Prince2Component,
    ScrumComponent,
    KanbanComponent,
    GraficasComponent
  ],
  imports: [
    CommonModule,
    MetodologiasRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    NgChartsModule
  ]
})
export class MetodologiasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeleccionMetodologiaComponent } from './pages/seleccion-metodologia/seleccion-metodologia.component';
import { HomeComponent } from './pages/home/home.component';
import { PMIComponent } from './pages/pmi/pmi.component';
import { Prince2Component } from './pages/prince2/prince2.component';
import { ScrumComponent } from './pages/scrum/scrum.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { MetodologiasRoutingModule } from './metodologias-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SeleccionMetodologiaComponent,
    HomeComponent,
    PMIComponent,
    Prince2Component,
    ScrumComponent,
    KanbanComponent
  ],
  imports: [
    CommonModule,
    MetodologiasRoutingModule,
    FlexLayoutModule
  ]
})
export class MetodologiasModule { }

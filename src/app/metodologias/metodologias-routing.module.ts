import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PMIComponent } from './pages/pmi/pmi.component';
import { Prince2Component } from './pages/prince2/prince2.component';
import { ScrumComponent } from './pages/scrum/scrum.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { SeleccionMetodologiaComponent } from './pages/seleccion-metodologia/seleccion-metodologia.component';
import { HomeComponent } from './pages/home/home.component';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      
      {
        path:'resumen',
        component:KanbanComponent
      },
      {
        path:'seleccion',
        component:SeleccionMetodologiaComponent
      },
      {
        path:'**',
        redirectTo:'resumen'
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class MetodologiasRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes:Routes=[
  {
    path:'metodologias',
    loadChildren: () => import('./metodologias/metodologias.module').then(m=>m.MetodologiasModule)
  },
  {
    path:'**',
    redirectTo: 'metodologias'
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
   
  ],
  exports:[
    RouterModule 
  ]
})
export class AppRoutingModule { }

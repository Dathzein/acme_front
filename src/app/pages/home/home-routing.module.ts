import {  NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionesComponent } from './administrador/asignaciones/asignaciones.component';
import { PersonasComponent } from './administrador/personas/personas.component';
import { VehiculosComponent } from './administrador/vehiculos/vehiculos.component';

const routes: Routes = [

  {
    path: '',
    redirectTo:'administrador',
    pathMatch:'full'
  },
  {
    path: '',
    component: HomeComponent,
    children:[
       {
        path: 'administrador',
        // component: AdministradorComponent,
        loadChildren: ()=>import('../../pages/home/administrador/administrador.module').then(m => m.AdministradorModule),
       },
    ]

  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }

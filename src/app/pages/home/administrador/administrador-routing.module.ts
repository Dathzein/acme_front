import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PersonasComponent } from './personas/personas.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: '',
    component: AdministradorComponent,
    children:[
       {
        path: 'dashboard',
        component: DashboardComponent
       },
       {
        path: 'vehiculos',
        component: VehiculosComponent
       },
       {
        path: 'personas',
        component: PersonasComponent
       },
       {
        path: 'asignaciones',
        component: AsignacionesComponent
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
export class AdministradorRoutingModule { }

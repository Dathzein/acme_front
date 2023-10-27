import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PersonasComponent } from './personas/personas.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    VehiculosComponent,
    PersonasComponent,
    AsignacionesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministradorModule { }

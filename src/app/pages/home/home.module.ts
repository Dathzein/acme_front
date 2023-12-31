import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    AdministradorComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule

  ]
})
export class HomeModule { }

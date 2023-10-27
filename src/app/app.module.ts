import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './services/interceptor.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuardsService } from './services/guards.service';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { VehiculosComponent } from './pages/home/administrador/vehiculos/vehiculos.component';
import { AdministradorRoutingModule } from './pages/home/administrador/administrador-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdministradorRoutingModule,

  ],
  providers: [GuardsService, AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

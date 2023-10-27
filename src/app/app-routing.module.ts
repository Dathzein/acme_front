import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { UsersGuard } from './guards/user.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'home',
    loadChildren: ()=>import('../app/pages/home/home.module').then(m => m.HomeModule),
    canLoad:[UsersGuard]
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'error'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

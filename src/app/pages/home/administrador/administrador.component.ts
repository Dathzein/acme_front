import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent {
  /**
   *
   */
  constructor(
    private services: DataService,
    private router: Router,
    private local: LocalService
  ) {

  }

  cerrarSesion() {
    let data = {}
    this.services.logout( data ).subscribe((res:any)=>{
      console.log(res)
      this.local.clearToken();
      this.local.clearValues('usuario');
      this.router.navigateByUrl('/login')
    })
  }
}

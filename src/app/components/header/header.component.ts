import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   *
   */
  constructor(private router: Router,
    private services: DataService,
    private local: LocalService) {
  }



  cerrarSesion() {
    let data = {}
    this.services.logout(data).subscribe((res: any) => {
      console.log(res)
      this.local.clearToken();
      this.local.clearValues('usuario');
      this.router.navigateByUrl('/login')
    })
  }

  irPagina(value: any) {
    let url = `/home/administrador/${value}`;
    this.router.navigateByUrl(url);
  }
}

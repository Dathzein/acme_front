import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { Router } from '@angular/router';
import { promises } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  token = null;
  // expire = null || 0;

  constructor(
    private local: LocalService,
    private router: Router
  ) { }

  async validarToken(): Promise<boolean> {
    await this.cargarToken();
    if (this.token == null) {
      this.local.clearToken();
      this.router.navigate(['/login']);
      return Promise.resolve(false);
    } else {
      return Promise.resolve(true);
    }
  }

  async cargarToken() {
    if (this.local.getJsonValue('usuario')) {
      let usuario = this.local.getJsonValue('usuario')
      this.token = usuario['token'];
    }
  }

  async isLogged(): Promise<boolean> {
    this.cargarToken();
    if (this.token === null) {
      // this.local.clearToken();
      return Promise.resolve(true);
    } else {
      this.router.navigateByUrl('/login');
      return Promise.resolve(false);
    }
  }
}

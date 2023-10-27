
import { Injectable } from '@angular/core';
import { CanLoad, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardsService } from '../services/guards.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanLoad {
  constructor(
    private guard: GuardsService
    ){}
  canLoad():Observable<boolean> | Promise<boolean> | boolean{
    return this.guard.validarToken();
  }
}

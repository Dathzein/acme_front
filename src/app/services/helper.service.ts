import { Injectable } from '@angular/core';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private local:LocalService
  ) { }

  getToken(){
    let token = this.local.getJsonValue('usuario');
    return token['token'];
  }
  getTokenExpires(){
    let expire = this.local.getJsonValue('usuario');
    return expire['expire'];
  }
}

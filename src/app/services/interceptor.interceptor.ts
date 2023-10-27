import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { EMPTY, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LocalService } from './local.service';
import { HelperService } from './helper.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private local: LocalService,
    private helper: HelperService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const header = new HttpHeaders({
      'Content-type': 'application/json;charset=utf-8'
    });

    if (request.headers.get('No-auth') == 'true') {
      return next.handle(request.clone({ headers: header }));
    }

    if (request.url.includes('api/login')) {
      return next.handle(request.clone({ headers: header }))
    }

    //Todo: Poner el del local storage
    const token = this.helper.getToken();
    // const expire = this.helper.getTokenExpires();

    //Todo: logicaValidacion token
    if (token != null ) {
      const fecha: number = new Date().getTime();
      //valida el token para ejecutarlo en las rutas
      const clonedreq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer '
          + token)
      });
      return next.handle(clonedreq).pipe(tap(event => {
      }, error => {
        //Normalmente se estalla el programa y lo saca pero pues se deja solo la muestra del error
        console.error(error.status);

        //todo:Descomentariar si se necesita
        // this.local.clearToken();
        // this.router.navigate(['/login']);
        return EMPTY;
      }));
    }
    else {
      this.local.clearToken();
      this.router.navigateByUrl('/login');
      return EMPTY;
    }

  }

}

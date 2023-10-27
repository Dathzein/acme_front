import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlApi = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

    login(data:any){
      return this.http.post<any>(this.urlApi + 'api/login',data)
    }
    logout(data:any){
      return this.http.post<any>(this.urlApi + 'api/logout', data)
    }
    catalogos(){
      return this.http.get<any>(this.urlApi + 'api/catalogos')
    }
    vehiculos(){
      return this.http.get<any>(this.urlApi + 'api/vehiculos')
    }
    personas(){
      return this.http.get<any>(this.urlApi + 'api/personas')
    }
    vehiculosRegistrar(data:any){
      return this.http.post<any>(this.urlApi + 'api/vehiculos', data)
    }
    personasRegistrar(data:any){
      return this.http.post<any>(this.urlApi + 'api/personas', data)
    }
}

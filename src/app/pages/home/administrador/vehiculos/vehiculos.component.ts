import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  tipoVehiculos: any = [];
  vehiculos: any = [];
  conductores: any = [];
  propietarios: any = [];
  isLoading = false;

  formRegVehiculo!: FormGroup;

  constructor(
    private services: DataService,
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.cargarFormularios();
    this.cargarDatos();
    this.cargarPersonas();
    this.cargarCtalogo();
  }

  cargarDatos() {;
    this.isLoading = true;
    this.services.vehiculos().subscribe((res: any) => {
      this.vehiculos = res;
      this.isLoading = false;
    })

  }
  cargarCtalogo(){
    this.services.catalogos().subscribe((res: any) => {
      let lista = res;
      lista.forEach((elemnt: any) => {
        if (elemnt.tipo === 'Vehiculo') {
          this.tipoVehiculos.push(elemnt);
        }
      });
    })
  }

  cargarPersonas(){
    this.services.personas().subscribe((res: any) => {
      let lista = res;
      lista.forEach((x: any) => {
        if (x.id_tipo_persona === '1') {

          this.conductores.push(x);
        }
        else if (x.id_tipo_persona === '2') {

          this.propietarios.push(x);

        }
      });

    })
  }

  cargarFormularios() {
    this.formRegVehiculo = this.fb.group({
      placa: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      marca: ['', [Validators.required, Validators.minLength(3)]],
      color: ['', [Validators.required, Validators.minLength(4)]],
      tipoVehiculo: ['', [Validators.required]],
      conductor: ['', [Validators.required]],
      propietario: ['', [Validators.required]]
    });
  }
  registrarVehiculo() {
    this.services.vehiculosRegistrar(this.formRegVehiculo.value).subscribe((res: any) => {
      this.cargarDatos();
      this.formRegVehiculo.reset();
    })
  }

  stringValuePro(x:any):string{
    let response = '';
    this.propietarios.forEach((element:any) => {
      if(element.id == x){
        let nombreCompleto = element.primer_nombre + ' ' + (element.segundo_nombre ? element.segundo_nombre : '') + element.apellidos
        response = nombreCompleto;
      }
  });
    return response;
  }
  stringValueDriv(x:any):string{
    let response = '';
    this.conductores.forEach((element:any) => {
      if(element.id == x){
        let nombreCompleto = element.primer_nombre + ' ' + (element.segundo_nombre ? element.segundo_nombre : '') + element.apellidos
        response = nombreCompleto;
      }
  });
    return response;
  }
  stringValueTypVh(x:any):string{
    let response = '';
    this.tipoVehiculos.forEach((element:any) => {
      if(element.id_tipo == x){
        response = element.descripcion;
      }
  });
    return response;
  }

}

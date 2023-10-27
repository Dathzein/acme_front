import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  tipoPersonas:any = [];
  vehiculos:any = [];
  personas:any = [];
  propietarios:any = [];
  isLoading=false;

  formRegPersona!: FormGroup;

  constructor(
    private services: DataService,
    private fb: FormBuilder,
  ){}
  ngOnInit(): void {
    this.cargarFormularios();
    this.cargarDatos();
    this.cargarCatalogos();
  }

  cargarDatos(){
    this.isLoading = true;
    this.services.vehiculos().subscribe((res:any)=>{
      this.vehiculos = res;

    })
    this.services.personas().subscribe((res:any)=>{
      this.personas = res;
    this.isLoading = false;

    })
  }

  cargarCatalogos(){
    this.services.catalogos().subscribe((res:any)=>{
      let lista = res;
      for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        if(element.tipo == 'Persona'){
          this.tipoPersonas.push(element);
        }

      }
    })
  }

  cargarFormularios(){
    this.formRegPersona = this.fb.group({
      cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      primerNombre: ['', [Validators.required]],
      segundoNombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      tipoPersona: ['', [Validators.required]],
      direccion:['', [Validators.required]],
      telefono:['', [Validators.required]],
      ciudad:['', [Validators.required]],
    });
  }

  stringValue(x:any):string{
    let response = '';
    this.tipoPersonas.forEach((element:any) => {
      if(element.id_tipo == x){
        response = element.descripcion;
      }
  });
    return response;
  }
}

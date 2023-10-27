import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.scss']
})
export class AsignacionesComponent {
  tipoPersonas: any = [];
  vehiculos: any = [];
  personas: any = [];
  propietarios: any = [];
  isLoading = false;

  constructor(
    private services: DataService,
  ) { }
  ngOnInit(): void {
    this.cargarDatos();
  }

  async cargarDatos() {
    this.isLoading = true;
    this.services.vehiculos().subscribe((res: any) => {
      this.vehiculos = res;

    })
    await this.services.personas().subscribe((res: any) => {
      this.personas = res;
      this.isLoading = false;

    })
  }

  stringValue(x: any): string {
    let response = '';
    this.personas.forEach((element: any) => {
      if (element.id == x) {
        let nombreCompleto = element.primer_nombre + ' ' + (element.segundo_nombre ? element.segundo_nombre : '') + element.apellidos
        response = nombreCompleto;

      }
    });
    return response;
  }


}

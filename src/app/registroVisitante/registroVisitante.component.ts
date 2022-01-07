import { Component, OnInit } from '@angular/core';
import { VisitanteService } from '../services/visitante.service';
import { Instalacion } from '../models/Instalacion';
import { Visitante } from '../models/Visitante';
import { RegistroVisitante } from '../models/RegistroVisitante';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registroVisitante',
  templateUrl: './registroVisitante.component.html',
  styleUrls: ['./registroVisitante.component.css'],
})
export class RegistroVisitanteComponent implements OnInit {
  listadoInstalaciones?: Instalacion[];
  listadoVisitantes?: Visitante[];
  registro: RegistroVisitante = {
    instalacion: new Instalacion,
    visitante: new Visitante,
    fechaIngreso: new Date()
  };
  resultado!: string;
  submitted = false;



  constructor(private visitanteService: VisitanteService) {
  }

  ngOnInit() {

    this.loadListadoInstalaciones();
    this.loadListadoVisitantes();
  }
  loadListadoInstalaciones(): void {
    console.log(this.registro);
    this.visitanteService.getAllInstalaciones().subscribe(
      (data) => {
        this.listadoInstalaciones = data;
        console.log(this.listadoInstalaciones);
        this.registro.instalacion = this.listadoInstalaciones[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadListadoVisitantes(): void {
    this.visitanteService.getAllVisitantes().subscribe(
      (data) => {
        this.listadoVisitantes = data;
        console.log(this.listadoVisitantes);
        this.listadoVisitantes.forEach((element) => {
          console.log(`Identificación: ${element.TipoIdentificacion.Nombre}`);
        });
        this.registro.visitante = this.listadoVisitantes[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshListado(): void {
    this.loadListadoInstalaciones();
    this.registro.fechaIngreso = new Date();
    this.loadListadoVisitantes();
  }

  guardarRegistro(): void {
    console.log(this.registro);
    let data = {
      InstalacionId: this.registro.instalacion.Id,
      VisitanteId: this.registro.visitante.Id,
      Observaciones: this.registro.observaciones,
      FechaIngreso: this.registro.fechaIngreso?.toLocaleString()
    };
    console.log(data);
    this.visitanteService.createRegistro(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newRegistro(): void {
    this.submitted = false;
    this.registro = new RegistroVisitante;
    this.refreshListado();
  }
}

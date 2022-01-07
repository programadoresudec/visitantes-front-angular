import { Component, OnInit } from '@angular/core';
import { Visitante, Identificacion } from '../models/Visitante';
import { VisitanteService } from '../services/visitante.service';

@Component({
  selector: 'app-addVisitante',
  templateUrl: './addVisitante.component.html',
  styleUrls: ['./addVisitante.component.css'],
})
export class AddVisitanteComponent implements OnInit {
  visitante: Visitante = new Visitante();
  listadoIdentificaciones: Identificacion[] = [];
  constructor(private visitanteService: VisitanteService) {}

  ngOnInit() {
    this.loadListadoIdentificaciones();
  }
  loadListadoIdentificaciones(): void {
    this.visitanteService.getAllIdentificaciones().subscribe(
      (data) => {
        this.listadoIdentificaciones = data;
        this.visitante.TipoIdentificacion = this.listadoIdentificaciones[0];
      },
      (error) => {
        console.log(error);
      }
    );

  }
  guardarRegistro(): void {
    console.log(this.visitante);
    let data = {
      TipoIdentificacionId: this.visitante.TipoIdentificacion.Id,
      Identificacion: this.visitante.Identificacion,
      Nombres: this.visitante.Nombres,
      Apellidos: this.visitante.Apellidos
    };
    console.log(data);
    this.visitanteService.createVisitante(data).subscribe(
      (response) => {
        console.log(response);
        alert("creado satisfactoriamente.");
      },
      (error) => {
        console.log(error);
        let mensaje = error.error;
        alert(mensaje);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { RegistroVisitante } from '../models/RegistroVisitante';
import { VisitanteService } from '../services/visitante.service';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.css'],
})
export class VisitantesComponent implements OnInit {
  registrosVisitante?: RegistroVisitante[];
  currentRegistroVisitante: RegistroVisitante;
  currentIndex = -1;
  nombreVisitante = '';
  constructor(private visitanteService: VisitanteService) {
    this.currentRegistroVisitante = new RegistroVisitante();
  }

  ngOnInit(): void {
    this.LoadRegistroVisitantes();
  }

  LoadRegistroVisitantes(): void {
    this.visitanteService.getAll().subscribe(
      (data) => {
        this.registrosVisitante = data;
        console.log(data);
        this.PonerBadge(this.registrosVisitante);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  PonerBadge(registrosVisitante: RegistroVisitante[]) {
    registrosVisitante.forEach((element) => {
      if (element.estadoRetirado) {
        element.badge = 'badge badge-success';
      } else {
        element.badge = 'badge badge-warning';
      }
    });
  }

  setActiveRegistro(registro: RegistroVisitante, index: number): void {
    this.currentRegistroVisitante = registro;
    this.currentIndex = index;
    console.log(this.currentRegistroVisitante);
  }

  searchVisitante(): void {
    this.currentRegistroVisitante = new RegistroVisitante();
    this.currentIndex = -1;

    this.visitanteService.findByNombreVisitante(this.nombreVisitante).subscribe(
      (data) => {
        this.registrosVisitante = data;
        console.log(data);
        this.PonerBadge(this.registrosVisitante);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.LoadRegistroVisitantes();
    this.currentRegistroVisitante = new RegistroVisitante();
    this.currentIndex = -1;
  }

  retirarVisitante(id: any): void {
    let data = {
      idRegistro: id,
    };
    this.visitanteService.retirarVisitante(data).subscribe(
      (data) => {
        console.log(data);
        let mensaje = data;
        alert(mensaje);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroVisitante } from '../models/RegistroVisitante';
import { Instalacion } from '../models/Instalacion';
import { Visitante, Identificacion } from '../models/Visitante';

const baseUrl = 'http://localhost:52323/api/';

@Injectable({
  providedIn: 'root',
})
export class VisitanteService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<RegistroVisitante[]> {
    return this.http.get<RegistroVisitante[]>(
      `${baseUrl}visitantes/listado-registros`
    );
  }

  createRegistro(data: any): Observable<any> {
    return this.http.post(
      `${baseUrl}visitantes/registro-visitante-instalacion`,
      data
    );
  }

  createVisitante(data: any): Observable<any> {
    return this.http.post(`${baseUrl}visitantes/crear`, data);
  }

  retirarVisitante(data: any): Observable<any> {
    return this.http.put(
      `${baseUrl}visitantes/retirar-visitante-de-instalacion`,
      data
    );
  }

  findByNombreVisitante(nombre: any): Observable<RegistroVisitante[]> {
    return this.http.get<RegistroVisitante[]>(
      `${baseUrl}visitantes/listado-by-nombre?nombreVisitante=${nombre}`
    );
  }

  getAllInstalaciones(): Observable<Instalacion[]> {
    return this.http.get<Instalacion[]>(`${baseUrl}instalaciones/list`);
  }

  getAllVisitantes(): Observable<Visitante[]> {
    return this.http.get<Visitante[]>(`${baseUrl}visitantes/list`);
  }
  getAllIdentificaciones(): Observable<Identificacion[]> {
    return this.http.get<Identificacion[]>(
      `${baseUrl}tipos-identificacion/list`
    );
  }
}

import { Instalacion } from './Instalacion';
import { Visitante } from './Visitante';
export class RegistroVisitante {
  Id?: any;
  instalacion: Instalacion = new Instalacion();
  visitante: Visitante = new Visitante();
  fechaIngreso?: Date;
  fechaSalida?: Date;
  estadoRetirado?: boolean;
  observaciones?: string;
  badge?: string;
}

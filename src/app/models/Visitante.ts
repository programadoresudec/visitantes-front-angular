export class Visitante {
  Id?: any;
  TipoIdentificacion: Identificacion = new Identificacion();
  Nombres?: string;
  Apellidos?: string;
  Identificacion?: string;
}
export class Identificacion {
  Id?: any;
  Siglas?: string;
  Nombre?: string;
}

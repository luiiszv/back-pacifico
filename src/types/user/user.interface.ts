



export interface IUserBase {
  tipo_documento_identidad: "CC" | "TI" | "CE" | "PASAPORTE";
  documento_identidad: string;
  nombres: string;
  apellidos: string;
  rh: string;
  tratamiento_medico?: boolean;
  descripcion_tratamiento_medico?: string | null;
  email: string;
  password: string;
  estado: boolean;
}
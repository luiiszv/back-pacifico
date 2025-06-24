import { Types } from "mongoose";

//Interfaces for User
import { RolInterface } from "../types/rol.types";
import { RegionalInterface } from "../types/regional.types";
import { CentroFormacionInterface } from "../types/CentroFormacion.types";
import { ModuloInterface } from "../types/module.types";




export interface UserInterface {
  id_user: number;
  rol_id: RolInterface | Types.ObjectId;
  modulo_id?: ModuloInterface | Types.ObjectId | null;
  regional_id: RegionalInterface | Types.ObjectId;
  centro_formacion_id: CentroFormacionInterface | Types.ObjectId;
  tipo_documento_identidad: "CC" | "TI" | "CE" | "PASAPORTE";
  documento_identidad: string;
  nombres: string;
  apellidos: string;
  rh?: string | null;
  tratamiento_medico?: boolean | null;
  descripcion_tratamiento_medico?: string | null;
  email: string;
  email_verified_at?: Date | null;
  password: string;
  estado: boolean;
}


import { Types } from "mongoose";
import { RegionalInterface } from "../types/regional.types";



export interface ICentroFormacionInterface {
  _id: Types.ObjectId;
  id_centro_formacion: number;
  regional_id: RegionalInterface | Types.ObjectId;
  id_regional: number;
  nombre: string;
  direccion?: string;
}

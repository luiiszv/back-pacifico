import { Types } from "mongoose";
import { RegionalInterface } from "../types/regional.types";



export interface CentroFormacionInterface {
  id_centro_formacion: number;
  regional_id: RegionalInterface | Types.ObjectId;
  nombre: string;
  descripcion?: string;
}

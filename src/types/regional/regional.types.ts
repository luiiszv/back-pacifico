

import { Types } from "mongoose";

export interface RegionalInterface {
  _id: Types.ObjectId;
  id_regional: number;
  departamento_id: Types.ObjectId;
  id_departamento?: number; // Room
  nombre?: string;
  descripcion?: string;
  createdAt?: Date;
  updatedAt?: Date;
}



import { Types } from "mongoose";

export interface RegionalInterface {
  id_regional: number;
  departamento_id: Types.ObjectId;
  nombre?: string;
  descripcion?: string;
}

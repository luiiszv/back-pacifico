import { Types } from "mongoose";

export interface RolInterface {
  id_rol: Types.ObjectId;
  nombre: string;
  description: string;
}




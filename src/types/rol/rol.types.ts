import { Types } from "mongoose";

export interface RolInterface {
  _id: Types.ObjectId;
  id_rol: number;
  nombre: string;
  descripcion: string;
  createdAt?: Date;
  updatedAt?: Date;
}




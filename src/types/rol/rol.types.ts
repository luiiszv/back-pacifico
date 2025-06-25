import { Types } from "mongoose";

export interface RolInterface {
  id_rol: number;
  nombre: string;
  descripcion: string;
  createdAt?: Date;
  updatedAt?: Date;
}




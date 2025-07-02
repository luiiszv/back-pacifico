
import { Number, Types } from "mongoose";

export interface DemografiaInterface {
    _id: Types.ObjectId; // Mongoose ObjectId
    id_demograifa: number;
    nombre: string;
    descripcion: string;
    createdAt?: Date;
    updatedAt?: Date;

}

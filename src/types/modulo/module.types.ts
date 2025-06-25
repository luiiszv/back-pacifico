import { Number, Types } from "mongoose";



export interface ModuloInterface {
    _id?: Types.ObjectId;
    id_modulo: number;
    nombre: string;
    descripcion?: string;
    createdAt?: Date;
    updatedAt?: Date;

}
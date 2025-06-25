





import { Types } from "mongoose";






export interface MunicipioInterface {
    _id: Types.ObjectId; // Mongoose ObjectId
    codigo_municipio: string; // Código del municipio según el DANE
    id_municipio: number; // ID autoincremental del municipio
    departamento_id: Types.ObjectId; // Referencia al departamento
    id_departamento: number; // ID del departamento para Room
    nombre: string; // Nombre del municipio
    createdAt?: Date;
    updatedAt?: Date;
}
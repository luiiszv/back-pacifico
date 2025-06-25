

import { Number, Types } from "mongoose";



export interface DepartamentoInterface {
    _id: Types.ObjectId; // Mongoose ObjectId
    codigo_departamento: string; // Código del departamento según el DANE
    id_departamento: number;
    nombre: string;

}



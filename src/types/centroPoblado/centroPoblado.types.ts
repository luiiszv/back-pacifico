import { Number, Types } from "mongoose";




export interface CentroPobladoInterface {
    _id: Types.ObjectId; // Mongoose ObjectId
    codigo_centro_poblado: string; // Código del centro poblado según el DANE
    id_centro_poblado: number; // ID autoincremental del centro poblado
    municipio_id: Types.ObjectId; // Referencia al municipio
    id_municipio: number; // ID del municipio para Room
    nombre: string; // Nombre del centro poblado
    tipo: string; // Tipo de centro poblado (ej. vereda, corregimiento, etc.)

    createdAt?: Date;
    updatedAt?: Date;
}
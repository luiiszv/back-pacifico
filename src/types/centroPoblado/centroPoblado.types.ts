import { Number, Types } from "mongoose";


export type TipoCentroPoblado =
  | 'CM'   // Cabecera Municipal
  | 'TEBF' // Territorios Especiales Biodiversos y Fronterizos
  | 'CP'   // Centro Poblado no categorizado
  | 'C'    // Centro Poblado tipo Corregimiento
  | 'CAS'  // Centro Poblado tipo Caserío
  | 'IP'   // Centro Poblado tipo Inspección de Policía
  | 'IPM'  // Centro Poblado tipo Inspección de Policía Municipal
  | 'IPD'; // Centro Poblado tipo Inspección de Policía Departamental

export interface CentroPobladoInterface {
    _id: Types.ObjectId; // Mongoose ObjectId
    codigo_centro_poblado: string; // Código del centro poblado según el DANE
    id_centro_poblado: number; // ID autoincremental del centro poblado
    municipio_id: Types.ObjectId; // Referencia al municipio
    id_municipio: number; // ID del municipio para Room
    nombre: string; // Nombre del centro poblado
    tipo: TipoCentroPoblado ; // <-- 
    createdAt?: Date;
    updatedAt?: Date;
}
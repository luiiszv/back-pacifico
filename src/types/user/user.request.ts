

import { Types } from "mongoose";
import { IUserBase } from "./user.interface";

export interface IUserRequest extends IUserBase {
    id_user?: number;
    rol_id?: Types.ObjectId;
    id_rol: number;
    modulo_id?: Types.ObjectId | null;
    id_modulo?: null | number ;
    regional_id?: Types.ObjectId;
    id_regional: number;
    centro_formacion_id?: Types.ObjectId;
    id_centro_formacion: number;
    createdAt?: Date;
    updatedAt?: Date;
}

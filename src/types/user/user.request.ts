

import { Types } from "mongoose";
import { IUserBase } from "./user.interface";

export interface IUserRequest extends IUserBase {
    id_user?: number;
    rol_id: Types.ObjectId;
    modulo_id?: Types.ObjectId | null;
    regional_id: Types.ObjectId;
    centro_formacion_id: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

import { RolInterface } from "../rol/rol.types";
import { ModuloInterface } from "../modulo/module.types";
import { RegionalInterface } from "../regional/regional.types";
import { ICentroFormacionInterface } from "../centroFormacion/CentroFormacion.types";
import { IUserBase } from "./user.interface";
import { Types } from "mongoose";

export interface IUserResponse extends IUserBase {
  _id: Types.ObjectId;
  id_user?: number;
  rol_id: RolInterface | Types.ObjectId | null;
  modulo_id?: ModuloInterface | Types.ObjectId | null;
  regional_id: RegionalInterface | Types.ObjectId | null;
  centro_formacion_id: ICentroFormacionInterface | Types.ObjectId | null;
}

import RolModel from "../models/Roles";
import { RolInterface } from "../types/rol/rol.types";
import { Types } from "mongoose";



export class RolRepository {
  // Aquí puedes agregar métodos específicos para manejar los roles

  public async createRol(rol: RolInterface) {
    return await RolModel.create(rol);
  }

  public async findRolById(id: Types.ObjectId): Promise<RolInterface | null> {
    return await RolModel.findById(id);
  }

  public async findRolByIdRol(id_rol: number): Promise<RolInterface | null> {
    return await RolModel.findOne({ id_rol });
  }

  public async getAllRols() {
    return await RolModel.find();
  }

  public async findAndDeleteRol(_id: string) {
    await RolModel.findByIdAndDelete(_id);
  }


}



import ModuloModel from "../models/Modulos";
import { ModuloInterface } from "../types/modulo/module.types";

export class ModuloRepository {

    findModuloByIdModulo = async (id_modulo: number | null): Promise<ModuloInterface | null> => {
        if (id_modulo === null) return null;
        return await ModuloModel.findOne({ id_modulo });

    }

    findAllModulos = async () => {
        return await ModuloModel.find();

    }
}
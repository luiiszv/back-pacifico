
import DepartamentoModel from "../models/Departamento";

import { DepartamentoInterface } from "../types/departamento/departamento.types";
export class DepartamentosRepository {

    async getAllDepartamentos(): Promise<DepartamentoInterface[]> {
        return await DepartamentoModel.find();
    }



}
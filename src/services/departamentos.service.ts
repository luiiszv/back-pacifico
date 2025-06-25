
import { success } from "zod/v4";
import { DepartamentosRepository } from "../repositories/departamentos.repository";

import { buildError, buildSuccess } from "../utils/baseResponse";

const departamentosRepository = new DepartamentosRepository();


export class DepartamentosService {


    getAllDepartamentos = async () => {
        const departamentos = await departamentosRepository.getAllDepartamentos();
        return buildSuccess(departamentos);
    }

}

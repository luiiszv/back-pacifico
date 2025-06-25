
import { DepartamentosService } from "../services/departamentos.service";
import { Request, Response } from "express";

import { successResponse, errorResponse } from "../utils/apiResponse";

const departamentosService = new DepartamentosService();
export class DepartamentosController {



    constructor() { }



    getAllDepartamentos = async (req: Request, res: Response) => {
        try {
            const response = await departamentosService.getAllDepartamentos();
            if (response.success) {
                return successResponse(res, response.data);
            }

            return errorResponse(res, response.error);
        } catch (error) {
            return errorResponse(res, "Internal Server Error");
        }
    };
}
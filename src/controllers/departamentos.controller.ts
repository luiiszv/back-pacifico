
import { DepartamentosService } from "../services/departamentos.service";
import { Request, Response } from "express";

import { successResponse, errorResponse } from "../utils/apiResponse";


const departamentosService = new DepartamentosService();

export class DepartamentosController {



    getAllDepartamentos = async (req: Request, res: Response): Promise<any> => {
        try {
            const response = await departamentosService.getAllDepartamentos();

            if (!response.success) {
                return errorResponse(res, response.message, response.errors); 
            }

            return successResponse(res, response.data);
        } catch (error) {
            console.log(error);
            return errorResponse(res, "Internal Server Error", 500, error);
        }
    };


}

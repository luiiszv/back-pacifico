import { Request, Response } from "express";
import { CentrosPobladosService } from "../services/centrosPoblados.service";
import { errorResponse, successResponse } from "../utils/apiResponse";

const centosPobladoService = new CentrosPobladosService();

export class CentrosPobladosController {
    getAllCentrosPoblados = async (req: Request, res: Response): Promise<any> => {

        try {
            const response = await centosPobladoService.getAllCentrosPoblados();
    
            if (!response.success) {

                return errorResponse(res, response.errors)
            }

            return successResponse(res, response.data)

        } catch (error) {
            return errorResponse(res, "Internal Server Error", 500, error);
        }


    }
}
import { Request, Response } from "express";
import { MunicipiosService } from "../services/municipios.service";

const municipiosService = new MunicipiosService();
import { successResponse, errorResponse } from "../utils/apiResponse";


export class MunicipiosController {


    getAllMunicipios = async (req: Request, res: Response): Promise<any> => {
        try {

            const response = await municipiosService.getAllMunicipios();
            if (!response.success) {
                return errorResponse(res, response.message,  response.errors);

            }

            return successResponse(res, response.data);

        } catch (error) {

        }

    }
}
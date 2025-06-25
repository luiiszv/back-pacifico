
import CentrosPoblados from "../models/CentrosPoblados";
import { buildError, buildSuccess } from "../utils/baseResponse";


export class CentrosPobladosRepository {
    getAllCentrosPoblados = async (): Promise<any> => {
        return await CentrosPoblados.find().sort({ nombre: 1 }).exec();

    }
}
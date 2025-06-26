import { CentrosPobladosRepository } from "../repositories/centrosPoblados.repository";
import { buildSuccess } from "../utils/baseResponse";


const centrosPoblados = new CentrosPobladosRepository();

export class CentrosPobladosService {

    getAllCentrosPoblados = async () => {
        const response = await centrosPoblados.getAllCentrosPoblados();
        return buildSuccess(response, 'Municipios')

    }
}
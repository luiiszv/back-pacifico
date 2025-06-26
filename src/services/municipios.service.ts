import { MunicipiosRepository } from "../repositories/municipios.repository"
import { buildSuccess } from "../utils/baseResponse";


const municipiosRepository = new MunicipiosRepository();

export class MunicipiosService {

    getAllMunicipios = async () => {

        const municipios = await municipiosRepository.getAllMunicipios();

        return buildSuccess(municipios);
    }
}
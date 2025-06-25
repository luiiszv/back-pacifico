import MunicipiosModel from "../models/Municipios";





export class MunicipiosRepository {

    getAllMunicipios = async (): Promise<any> => {
        return await MunicipiosModel.find().sort({ nombre: 1 }).exec();

    }
}
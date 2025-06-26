import MunicipiosModel from "../models/Municipios";





export class MunicipiosRepository {

    getAllMunicipios = async (): Promise<any> => {
        return await MunicipiosModel.find().select('-__v');

    }
}
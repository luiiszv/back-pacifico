import CentroFormacionModel from "../models/CentrosFormacion";


export class CentroFormacionRepository {


    findCentroFormaiconByIdCentroFormacion = async (id_centro_formacion: number) => {
        return await CentroFormacionModel.findOne({ id_centro_formacion });

    }

    findAllCentrosFormacion = async () => {
        return await CentroFormacionModel.find();

    }
}
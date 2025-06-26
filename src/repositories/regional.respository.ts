import RegionalModel from "../models/Regionales";


//Pendinete las Iterfaces

export class RegionalRepository {

    findRegionalByIdRegional = async (id_regional: number) => {
        return await RegionalModel.findOne({ id_regional });

    }

    findAllRegionales = async () => {
        return await RegionalModel.find();

    }

}
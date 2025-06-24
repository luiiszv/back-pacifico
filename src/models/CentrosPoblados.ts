

import { model, Schema } from "mongoose";
import Municipios from "./Municipios";

const CentrosPobladosSchema = new Schema({

    id_centro_poblado: {
        type: Number,
        required: true,
        unique: true,
    },

    codigo_centro_poblado: {
        type: String,
        required: true,
        unique: true
    },

    municipios_id: {
        type: Schema.Types.ObjectId,
        ref: "Municipios",
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
        unique: true,
    }
});

export default model("CentrosPoblados", CentrosPobladosSchema);


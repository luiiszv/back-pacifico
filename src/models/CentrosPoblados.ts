

import mongoose, { model, Schema } from "mongoose";
import { CentroPobladoInterface } from "../types/centroPoblado.types";

const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea


// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const CentrosPobladosSchema = new Schema<CentroPobladoInterface>({

    id_centro_poblado: { // ID autoincremental del centro poblado
        type: Number,
    
     
    },

    municipio_id: {
        type: Schema.Types.ObjectId,
        ref: "Municipios",
        required: true,
    },

    codigo_centro_poblado: { // Código del centro poblado según el DANE
        type: String,
        required: true
    },

    id_municipio: { // ID del municipio para Room
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true,
        
    },
    tipo: {
        type: String,
        required: true
    }

});

// ⚙️ Plugin para autoincrementar id_centro_poblado
CentrosPobladosSchema.plugin(AutoIncrement, { inc_field: "id_centro_poblado" });

export default model<CentroPobladoInterface>("CentrosPoblados", CentrosPobladosSchema);


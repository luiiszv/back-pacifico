

import mongoose, { Schema, model } from "mongoose";
import { MunicipioInterface } from "../types/municipio/municipio.types";


const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea


// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const MunicipiosSchema = new Schema<MunicipioInterface>({

    id_municipio: { //id autoincremental
        type: Number,
        unique: true,
    },

    codigo_municipio: { //del dane
        type: String,
        required: true,
        unique: true
    },
    departamento_id: { //Populate con el id del departamento 
        type: Schema.Types.ObjectId,
        ref: "Departamentos",
        required: true
    },

    id_departamento: { // para Room 
        type: Number,
        required: true,
     
    },


    nombre: { // Nombre del municipio
        type: String,
        required: true

    },

}, { timestamps: true });


// ⚙️ Plugin para autoincrementar id_municipio
MunicipiosSchema.plugin(AutoIncrement, { inc_field: "id_municipio" });

export default model<MunicipioInterface>("Municipios", MunicipiosSchema);



import mongoose, { Schema, model } from "mongoose";


const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea


// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const MunicipiosSchema = new Schema({

    id_municipio: {
        type: String,
        required: true,
        unique: true
    },
    departamento_id: {
        type: Schema.Types.ObjectId,
        ref: "Departamentos",
    },
    codigo_municipio: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true

    },

});


// ⚙️ Plugin para autoincrementar id_municipio
MunicipiosSchema.plugin(AutoIncrement, { inc_field: "id_municipio" });

export default model("Municipios", MunicipiosSchema);

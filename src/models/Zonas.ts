

import mongoose, { Schema, model } from "mongoose";

const AutoIncrementFactory = require("mongoose-sequence")(mongoose); 
const AutoIncrement = AutoIncrementFactory;

const zonasSchema = new Schema({
    id_zona: {
        type: Number,
        required: true,
        unique: true, // Unique
    },

    centro_poblado_id: {
        type: Schema.Types.ObjectId,
        ref: "CentrosPoblados",
        required: true,

    },

    id_centro_poblado: {
        type: Number, //Room
        required: true,


    },
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    descripcion: {
        type: String,
    },
});


// ⚙️ Plugin para autoincrementar id_user
zonasSchema.plugin(AutoIncrement, { inc_field: "id_zona" });

export default model("Zonas", zonasSchema);

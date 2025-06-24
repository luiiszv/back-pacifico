

import { Schema, model } from "mongoose";



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
        unique: true,
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

export default model("Zonas", zonasSchema);

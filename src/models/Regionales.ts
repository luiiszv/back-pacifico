import { Schema, model } from "mongoose";

const regionalSchema = new Schema({

    id_regional: {
        type: Number,
        required: true,
        unique: true, // Unique
    },
    departamento_id: {
        type: Schema.Types.ObjectId,
        ref: "Departamento", // Ajusta si el modelo real tiene otro nombre
        required: true
    },

    nombre: {
        type: String,
        required: false, // Opcional
    },

    descripcion: {
        type: String,
        required: false, // Opcional
    }
});


export default model("Regionales", regionalSchema);

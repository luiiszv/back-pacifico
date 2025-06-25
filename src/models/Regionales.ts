import mongoose, { Schema, model } from "mongoose";
import { RegionalInterface } from "../types/regional/regional.types";

const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea


// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const regionalSchema = new Schema<RegionalInterface>({
   
    id_regional: {
        type: Number,
        unique: true, // Unique
    },
    departamento_id: {
        type: Schema.Types.ObjectId,
        ref: "Departamento", // Ajusta si el modelo real tiene otro nombre
        required: true
    },

    id_departamento: {
        type: Number,
        required: false, // room
       
    },

    nombre: {
        type: String,
        required: false, // Opcional
    },

    descripcion: {
        type: String,
        required: false, // Opcional
    }
}, { timestamps: true });

// ⚙️ Plugin para autoincrementar id_regional
regionalSchema.plugin(AutoIncrement, { inc_field: "id_regional" });


export default model<RegionalInterface>("Regionales", regionalSchema);

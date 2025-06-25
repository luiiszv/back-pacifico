import mongoose, { model, Schema } from "mongoose";
import { ICentroFormacionInterface } from "../types/CentroFormacion.types";

const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea


// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const CentroFormacionShema = new Schema<ICentroFormacionInterface>({
   
    id_centro_formacion: {
        type: Number,
        unique: true,
    },

    regional_id: {
        type: Schema.Types.ObjectId,
        ref: "Regionales",

    },
    id_regional: {
        type: Number,
        required: true, // Room
    },
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    direccion: {
        type: String,
        required: false,
    },
});

// ⚙️ Plugin para autoincrementar id_centro_formacion
CentroFormacionShema.plugin(AutoIncrement, { inc_field: "id_centro_formacion" });

export default model<ICentroFormacionInterface>("CentrosDeFormacion", CentroFormacionShema);

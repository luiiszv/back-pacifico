



import { Schema, model } from "mongoose";



const viviendasSchema = new Schema({
    id_vivienda: {
        type: Number,
        required: true,
        unique: true, // Unique
    },

    zona_id: {
        type: Schema.Types.ObjectId,
        ref: "Zonas",
        required: true,
        unique: true,
    },

    latitud: {
        type: String,
        required: true,

    },
    longitud: {
        type: String,
        required: true,

    },
    numero_habitantes: {
        type: Number,
        required: true,

    },
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,

    },
    tipo_documento_identidad_rep_familiar: {
        type: String,
        enum: ["CC", "TI", "CE", "PASAPORTE"], // Enum ejemplo, ajusta los valores reales
        required: true
    },
    documento_identidad_rep_familiar: {
        type: String,
        maxlength: 20,
        required: true
    },
    representante_familiar: {
        type: String,
        required: true,

    },
    descripcion: {
        type: String,
    },
});

export default model("Viviendas", viviendasSchema);

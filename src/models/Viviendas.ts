import mongoose, { Schema, model } from "mongoose";


const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea
// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const viviendasSchema = new Schema({
    id_vivienda: {
        type: Number,
        unique: true, // Unique
    },

    zona_id: {
        type: Schema.Types.ObjectId,
        ref: "Zonas",
        required: true,
    },

    id_zona: {
        type: Number, //Room
        required: true,

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

    tipo: {
        type: String,
        enum: [
            "Casa",
            "Apartamento",
            "Cuarto en inquilinato",
            "Vivienda indígena",
            "Rancho o choza",
            "Improvisada",
            "Refugio",
            "Otra"
        ],

        default: "Otra",
        required: true
    },


    tenencia: {
        type: String,
        enum: [
            "Propia",
            "Propia con pago",
            "Alquilada",
            "Prestada",
            "Ocupada sin permiso",
            "Otra"
        ],
        default: "Otra",
        required: false
    },

    descripcion: {
        type: String,
    },
}, { timestamps: true }
);

// ⚙️ Plugin para autoincrementar id_user
viviendasSchema.plugin(AutoIncrement, { inc_field: "id_vivienda" });

export default model("Viviendas", viviendasSchema);

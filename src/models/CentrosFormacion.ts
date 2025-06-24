import { model, Schema, Types } from "mongoose";

const CentroFormacionShema = new Schema({

    id_centro_formacion: {
        type: Number,
        required: true,
        unique: true,
    },

    regional_id: {
        type: Schema.Types.ObjectId,
        ref: "Regionales",
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    descripcion: {
        type: String,
        required: false,
    },
});

export default model("CentroFormacion", CentroFormacionShema);

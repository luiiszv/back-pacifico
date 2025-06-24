import mongoose, { Schema, model } from "mongoose";
const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea
import { UserInterface } from "../types/user.types";
// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const userSchema = new Schema<UserInterface>({
  id_user: {
    type: Number,
    unique: true,
    required: true
  },
  rol_id: {
    type: Schema.Types.ObjectId,
    ref: "Roles",
    required: true
  },
  modulo_id: {
    type: Schema.Types.ObjectId,
    ref: "Modulos",
    default: null
  },
  regional_id: {
    type: Schema.Types.ObjectId,
    ref: "Regionales",
    required: true
  },
  centro_formacion_id: {
    type: Schema.Types.ObjectId,
    ref: "CentroFormacion", // Ajusta si el modelo real tiene otro nombre
    required: true
  },
  tipo_documento_identidad: {
    type: String,
    enum: ["CC", "TI", "CE", "PASAPORTE"], // Enum ejemplo, ajusta los valores reales
    required: true
  },
  documento_identidad: {
    type: String,
    maxlength: 20,
    required: true
  },
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  rh: {
    type: String,
    default: null
  },
  tratamiento_medico: {
    type: Boolean,
    default: null
  },
  descripcion_tratamiento_medico: {
    type: String,
    default: null
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+\@.+\..+/
  },
  email_verified_at: {
    type: Date,
    default: null
  },
  password: {
    type: String,
    required: true
  },
  estado: {
    type: Boolean,
    default: true
  }
});

// ⚙️ Plugin para autoincrementar id_user
userSchema.plugin(AutoIncrement, { inc_field: "id_user" });

export default model("Usuarios", userSchema);


import mongoose, { Schema, model } from "mongoose";
const AutoIncrementFactory = require("mongoose-sequence")(mongoose);
import { IUserRequest } from "../types/user/user.request";
import "../models/Regionales";
import "../models/CentrosFormacion";
import "../models/Modulos";
import "../models/Roles";




// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const userSchema = new Schema<IUserRequest>({
  id_user: { //Autoincrement para Room Pk
    type: Number,
    unique: true,

  },
  rol_id: {
    type: Schema.Types.ObjectId, //Relacion con Mongo
    ref: "Roles",  //No es req por que se asigna si existe
  },

  id_rol: {
    type: Number, //Relacion con Mongo
    required: true
  },
  modulo_id: {
    type: Schema.Types.ObjectId, //Relacion con Mongo
    ref: "Modulos",
    default: null
  },
  id_modulo: {
    type: Number, //Relacion con room
    required: false,
    default: null
  },
  regional_id: {
    type: Schema.Types.ObjectId, //Relacion con Mongo
    ref: "Regionales",
    
  },

  id_regional: {
    type: Number, //Relacion con room
    required: true
  },
  centro_formacion_id: {
    type: Schema.Types.ObjectId,
    ref: "CentrosDeFormacion", // Ajusta si el modelo real tiene otro nombre
   
  },

   id_centro_formacion: {
    type: Number,
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
    default: "-"
  },
  tratamiento_medico: {
    type: Boolean,
    default: false
  },
  descripcion_tratamiento_medico: {
    type: String,
    default: "-"
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+\@.+\..+/
  },

  password: {
    type: String,
    required: true
  },
  estado: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// ⚙️ Plugin para autoincrementar id_user
userSchema.plugin(AutoIncrement, { inc_field: "id_user" });

export default model<IUserRequest>("Usuarios", userSchema);


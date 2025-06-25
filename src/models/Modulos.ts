import { model, Schema } from "mongoose";

import { ModuloInterface } from "../types/modulo/module.types";

const ModuleShema = new Schema<ModuloInterface>({

  id_modulo: {
    type: Number,
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
}, { timestamps: true });

export default model<ModuloInterface>("Modulos", ModuleShema);

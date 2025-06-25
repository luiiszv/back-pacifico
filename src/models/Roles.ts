import { Schema, model } from "mongoose";

import { RolInterface } from "../types/rol/rol.types";

const rolSchema = new Schema<RolInterface>({

  id_rol: {
    type: Number,
    required: true,
    unique: true, // Unique
  },
  nombre: {
    type: String,
    required: true,
    unique: true, // Unique
  },

  descripcion: {
    type: String,
    required: false, // Op
  }
}, { timestamps: true });


export default model<RolInterface>("Roles", rolSchema);

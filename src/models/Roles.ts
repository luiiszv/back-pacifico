import { Schema, model } from "mongoose";

const rolSchema = new Schema({

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
});


export default model("Roles", rolSchema);

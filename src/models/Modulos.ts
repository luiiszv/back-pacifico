import { model, Schema } from "mongoose";

const ModuleShema = new Schema({

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
});

export default model("Modulos", ModuleShema);

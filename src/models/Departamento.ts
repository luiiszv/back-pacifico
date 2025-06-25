import mongoose, { model, Schema } from "mongoose";
const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea


//Interface del Departamento
import { DepartamentoInterface } from "../types/departamento/departamento.types";

// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const DepartamentoSchema = new Schema<DepartamentoInterface>({

  id_departamento: { //id autoincremental
    type: Number,
    unique: true,
  },
  codigo_departamento: { //del dane
    type: String,
    required: true,
    unique: true,
  },
  nombre: { //Nombre del departamento
    type: String,
    required: true,
    unique: true,
  }
});


// ⚙️ Plugin para autoincrementar id_departamento
DepartamentoSchema.plugin(AutoIncrement, { inc_field: "id_departamento" });

export default model<DepartamentoInterface>("Departamentos", DepartamentoSchema);

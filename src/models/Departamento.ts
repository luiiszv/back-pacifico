import mongoose, { model, Schema } from "mongoose";
const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea


// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;



const DepartamentoSchema = new Schema({

  id_departamento: {
    type: Number,
    required: true,
    unique: true,
  },
  codigo_departamento: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
    unique: true,
  }
});


// ⚙️ Plugin para autoincrementar id_departamento
DepartamentoSchema.plugin(AutoIncrement, { inc_field: "id_departamento" });

export default model("Departamentos", DepartamentoSchema);

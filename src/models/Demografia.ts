import mongoose, { model, Schema } from "mongoose";
const AutoIncrementFactory = require("mongoose-sequence")(mongoose); // Cambia esta línea


//Interface del Demo
import { DemografiaInterface } from "../types/demografia/demografia.types";

// ✅ Crea instancia del plugin
const AutoIncrement = AutoIncrementFactory;

const DepartamentoSchema = new Schema<DemografiaInterface>({

    id_demograifa: { //id autoincremental
        type: Number,
        unique: true,
    },
    nombre: { //Nombre del departamento
        type: String,
        required: true,
        unique: true,
    },
    descripcion: { //Nombre del departamento
        type: String,
        required: false,

    }
}, { timestamps: true });


// ⚙️ Plugin para autoincrementar id_departamento
DepartamentoSchema.plugin(AutoIncrement, { inc_field: "id_demografia" });

export default model<DemografiaInterface>("Demografias", DepartamentoSchema);

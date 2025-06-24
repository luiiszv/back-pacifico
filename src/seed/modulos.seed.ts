// src/seed/runModulosSeed.ts
import ModuleModel from "../models/Modulos";

export const runModulosSeed = async () => {
  const count = await ModuleModel.countDocuments();


  const modulos = [
    {
      id_modulo: 1,
      nombre: "ModuloAgua",
      descripcion: "Modulo para la gestión de recursos hídricos, permite el seguimiento y …",
      created_at: new Date("2025-06-21T18:55:43.679Z"),
      updated_at: new Date("2025-06-21T18:55:43.679Z")
    },
    {
      id_modulo: 2,
      nombre: "ModuloConstruccion",
      descripcion: "Modulo para la gestión de proyectos de construcción, permite el seguim…",
      created_at: new Date("2025-06-21T18:55:43.680Z"),
      updated_at: new Date("2025-06-21T18:55:43.680Z")
    }
  ];

  await ModuleModel.deleteMany({});
  console.log(`-- Colección 'modulos' limpia. ${count}`);
  await ModuleModel.insertMany(modulos);
  console.log("-- Módulos insertados correctamente.");
};

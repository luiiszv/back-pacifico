import express from "express";
import { config } from "dotenv";

import app from "./app";

//Dadabase
import { connectDb } from "./database/database";

//Seed
// import { runModulosSeed } from "./seed/modulos.seed";













// 🚀 Inicializar base de datos y seed
const startServer = async () => {
  try {
    await connectDb();
 
    app.listen(app.get("port"), () => {
      console.log("✅ Server running on port", app.get("port"));
    });
  } catch (error) {
    console.error("❌ Error al iniciar la app:", error);
    process.exit(1);
  }
};

startServer();
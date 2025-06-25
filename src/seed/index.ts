import { connectDb } from "../database/database";
import { connection } from "mongoose";

// import { runModulosSeed } from "./modulos.seed"; //Moodulos
// import { runRolesSeed } from "./roles.seed";
import { runUserSeed } from "./user.seed";



export const refreshDatabase = async () => {
  try {
    await connectDb();

    console.log("🧨 Limpiando colecciones...");

    console.log("--Ejecutando seeds...");
    // await runModulosSeed(); //Modulos
    // await runRolesSeed(); //Roles
    await runUserSeed(); //Usuarios


    console.log("--📅 Base de datos refrescada correctamente.");
  } catch (error) {
    console.error("❌ Error en el seed:", error);
  } finally {
    await connection.close();
    process.exit(0); // Salir del script
  }
};



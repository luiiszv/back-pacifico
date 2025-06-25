import express from "express";
import { config } from "dotenv";

//Routes
import userRouter from "./routes/users.routes";
import rolesRouter from "./routes/roles.routes";
import departamentosRouter from "./routes/departamentos.routes";

//Dadabase
import { connectDb } from "./database/database";

//Seed
// import { runModulosSeed } from "./seed/modulos.seed";

config();
const app = express();

// Middleware
app.use(express.json()); // Convierte la req.body a un JSON

// Puerto
app.set("port", process.env.PORT || 3000);



// Ruta principal
app.use("/auth", userRouter);
app.use("/roles", rolesRouter);


app.use("/departamentos", departamentosRouter);







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
import express from "express";
import { config } from "dotenv";

config();
const app = express();

//Routes
import auth from "./routes/users.routes";
import rolesRouter from "./routes/roles.routes";
import departamentosRouter from "./routes/departamentos.routes";

// Middleware
app.use(express.json()); // Convierte la req.body a un JSON
// Puerto
app.set("port", process.env.PORT || 3000);

// Ruta principal
app.use("/backend-pacifico/public/api/v1/auth", auth);
app.use("/backend-pacifico/public/api/v1/roles", rolesRouter);
app.use("/backend-pacifico/public/api/v1/departamentos", departamentosRouter); // ✅ ESTO SÍ FUNCIONA

export default app;
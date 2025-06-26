import express from "express";
import { config } from "dotenv";

config();
const app = express();

import mainRouter from "./routes";



// Middleware
app.use(express.json()); // Convierte la req.body a un JSON
// Puerto
app.set("port", process.env.PORT || 3000);


app.use(mainRouter);


export default app;

import { Router } from "express";
import { CentrosPobladosController } from "../controllers/centrosPoblados.controller";

const app = Router();
const controller = new CentrosPobladosController();


app.get('/', controller.getAllCentrosPoblados);


export default app;
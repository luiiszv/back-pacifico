import { Router } from "express";
import { MunicipiosController } from "../controllers/municipios.controller";

const router = Router();

const controller = new MunicipiosController();

router.get("/", controller.getAllMunicipios);

export default router;

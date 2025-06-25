import { Router } from "express";
import { DepartamentosController } from "../controllers/departamentos.controller";

const router = Router();

const controller = new DepartamentosController();

router.get("/", controller.getAllDepartamentos);

export default router;

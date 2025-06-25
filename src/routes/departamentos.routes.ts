
import { DepartamentosController } from "../controllers/departamentos.controller";
import { Router } from "express";
const departamentosController = new DepartamentosController();


const router = Router();

router.get("/", departamentosController.getAllDepartamentos.bind(departamentosController));



export default router;

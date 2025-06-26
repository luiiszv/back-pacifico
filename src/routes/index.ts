import { Router } from "express";

// Importar tus rutas
import authRoutes from "./users.routes";
import rolesRoutes from "./roles.routes";
import departamentosRoutes from "./departamentos.routes";
import municipiosRoutes from "./municipios.routes";
import centrosPobladosRoutes from "./centrosPoblados.routes";


// Crear router agrupador
const router = Router();

// Prefijo común para todas las rutas
const basePath = "/backend-pacifico/public/api/v1";

// Agregar rutas aquí
router.use(`${basePath}/auth`, authRoutes);
router.use(`${basePath}/roles`, rolesRoutes);
router.use(`${basePath}/departamentos`, departamentosRoutes);
router.use(`${basePath}/municipios`, municipiosRoutes);
router.use(`${basePath}/centros-poblados`, centrosPobladosRoutes);


export default router;

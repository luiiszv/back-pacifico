// Import dependencias externas
import { Router } from "express";

// Import Controladores
import { registerUsers, getAllUsers, login, verify, logOut } from "../controllers/user.controller";

// Validaciones
import { validateSchema } from "../middleware/validator.schema";
import { registerUserSchema, loginSchema } from "../schemas/user.schema";
import { authMiddleware } from "../middleware/auth";

//  Router
const router = Router();

//  rutas
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logOut); //Prueba
router.get('/verify', authMiddleware, verify);

router.get("/users", getAllUsers);
router.post("/register", validateSchema(registerUserSchema), registerUsers);

// Exportar Router
export default router;

import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { jwtData } from "../types/express";
import { JWT_SECRET } from "../config/credentials";

export const validateToken = (token: string) => {
  try {
    const secret = JWT_SECRET;
    if (!secret) {
      throw new Error("No hay secreto en .env");
    }
    const decodedToken = jwt.verify(token, secret) as jwtData;

    return decodedToken;
  } catch (error) {
    return null;
  }
};

export const authMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      _res.status(401).json({ error: "Token no proporcionado" });
      return;
    }

    // Extrae el token después de "Bearer "
    const token = authorization.startsWith("Bearer ")
      ? authorization.slice(7)
      : authorization;

    const validation = validateToken(token);

    if (validation === null) {

      _res.status(401).json({ message: "Access Denied" });
      return
    }
    req.user = validation;

    return next();
  } catch (error) {
    _res
      .status(500)
      .json({ error: "Error interno en el middleware de autenticación" });

    return
  }
};

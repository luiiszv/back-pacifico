import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { jwtData } from "../types/express";
import { JWT_SECRET } from "../config/credentials";
import { buildError } from "../utils/baseResponse";

import { RequestHandler } from "express";

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


export const authMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      const response = buildError("Token no proporcionado", [], 401);
      res.status(response.statusCode).json(response);
      return; // 👈 evita continuar
    }

    const token = authorization.startsWith("Bearer ")
      ? authorization.slice(7)
      : authorization;

    const validation = validateToken(token);

    if (!validation) {
      const response = buildError("Token inválido o expirado", [], 401);
      res.status(response.statusCode).json(response);
      return; // 👈 evita continuar
    }

    req.user = validation;
    next(); // ✅ avanza al siguiente middleware
  } catch (error) {
    const response = buildError(
      "Error interno en el middleware de autenticación",
      error instanceof Error
        ? [{ path: "middleware", message: error.message }]
        : [],
      500
    );
    res.status(response.statusCode).json(response);
  }
};

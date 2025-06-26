import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { jwtData } from "../types/express";
import { JWT_SECRET } from "../config/credentials";

//Res
import { successResponse, errorResponse } from "../utils/apiResponse";
import { buildError, buildSuccess } from "../utils/baseResponse";

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
      const response = buildError("Token no válido", null, 401);
      return errorResponse(_res, response.message, response.statusCode, response.error);

    }

    // Extrae el token después de "Bearer "
    const token = authorization.startsWith("Bearer ")
      ? authorization.slice(7)
      : authorization;

    const validation = validateToken(token);

    if (validation === null) {

      const response = buildError("Token inválido o expirado", null, 401);
      return errorResponse(_res, response.message, response.statusCode, response.error);
    }
    req.user = validation;

    return next();
  } catch (error) {
    const response = buildError("Error interno en autenticación", error, 500);
    return errorResponse(_res, response.message, response.statusCode, response.error);
  }
};

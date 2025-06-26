import { ApiResponse } from "../types/api-response.interface";
import { ZodError } from "zod";




//Para sercios que devuelven una respuesta estandarizada
export const buildSuccess = <T>(
  data: T,
  message = "Operación exitosa",
  statusCode = 200
): ApiResponse<T> & { statusCode: number } => ({
  success: true,
  message,
  data,
  statusCode,
});


export const buildError = (
  message = "Ocurrió un error en el servidor",
  error?: any,
  statusCode = 500
): ApiResponse<null> & { statusCode: number } => {
  let parsedError = error;

  // Si es un error de Zod, parseamos los errores
  if (error instanceof ZodError) {
    parsedError = error.errors.map((err) => ({
      path: err.path.join("."), // ejemplo: "email", "direccion.ciudad"
      message: err.message,
    }));
    statusCode = 400; // Bad Request por error de validación
  }

  return {
    success: false,
    message,
    error: parsedError,
    statusCode,
  };
};


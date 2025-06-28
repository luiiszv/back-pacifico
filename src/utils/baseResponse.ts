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


interface FieldError {
  path: string;
  message: string;
}

export const buildError = (
  message = "Ocurrió un error en la validación",
  errors?: ZodError | FieldError[],
  statusCode = 400
): ApiResponse<null> & { statusCode: number } => {
  let parsedErrors: FieldError[] = [];

  if (errors instanceof ZodError) {
    parsedErrors = errors.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
  } else if (Array.isArray(errors)) {
    parsedErrors = errors;
  }

  return {
    success: false,
    message,
    errors: parsedErrors,
    statusCode,
  };
};
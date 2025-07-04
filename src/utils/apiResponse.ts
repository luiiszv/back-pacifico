import { Response } from "express";
import { ApiResponse } from "../types/api-response.interface";


//Para controladores que devuelven una respuesta estandarizada
export const successResponse = <T>(
  res: Response,
  data: T,
  message = "Operación exitosa",
  statusCode = 200
): Response<ApiResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};


export const errorResponse = (
  res: Response,
  message = "Ocurrió un error en el servidor",
  statusCode = 500,
  errors?: any
): Response<ApiResponse<null>> => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};


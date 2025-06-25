import { ApiResponse } from "../types/api-response.interface";

export const buildSuccess = <T>(
  data: T,
  message = "Operación exitosa"
): ApiResponse<T> => ({
  success: true,
  message,
  data,
});

export const buildError = (
  message = "Ocurrió un error en el servidor",
  error?: any
): ApiResponse<null> => ({
  success: false,
  message,
  error,
});

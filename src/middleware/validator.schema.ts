import { Request, Response, NextFunction } from "express";

import { ZodError, ZodSchema } from "zod";
import { buildError } from "../utils/baseResponse";

// export const validateSchema =
//   (schema: z.ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => {
//     try {
//       schema.parse(req.body)
//       next();
//     } catch (error) {
//         if(error instanceof ZodError){
//             res.status(400).json({
//                 message: "Validation Failed",
//                 errors: error.errors.map((err)=>({
//                     message: err.message,
//                     path: err.path
//                 }))
//             })
//         }

//     }
//   };



export const validateSchema =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const response = buildError("Error de validación", error);
        res.status(response.statusCode).json(response);
      } else {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";

        res.status(500).json({
          success: false,
          message: "Error inesperado en la validación",
          errors: [{ path: "", message: errorMessage }],
          statusCode: 500,
        });
      }
    }
  };

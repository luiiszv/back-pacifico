import mongoose from "mongoose";
import { z } from "zod";

const registerUserSchema = z.object({
  tipo_documento_identidad: z.enum(["CC", "TI", "CE", "PASAPORTE"], {
    required_error: "Tipo de documento es requerido"
  }),

  documento_identidad: z
    .string({ required_error: "Documento es requerido" })
    .max(20, { message: "Máximo 20 caracteres" }),

  nombres: z
    .string({ required_error: "Nombres son requeridos" })
    .min(3, { message: "Mínimo 3 caracteres" }),

  apellidos: z
    .string({ required_error: "Apellidos son requeridos" })
    .min(3, { message: "Mínimo 3 caracteres" }),

  email: z
    .string({ required_error: "Email es requerido" })
    .email({ message: "Formato de email inválido" }),

  password: z
    .string({ required_error: "Contraseña requerida" })
    .min(4, { message: "La contraseña debe tener al menos 4 caracteres" }),

  id_rol: z.number({ required_error: "ID de rol requerido" }),
  id_regional: z.number({ required_error: "ID de regional requerido" }),
  id_centro_formacion: z.number({ required_error: "ID de centro de formación requerido" }),

  id_modulo: z
    .union([z.number(), z.null()])
    .optional(),

  rh: z.string().optional(),
  tratamiento_medico: z.boolean().optional(),
  descripcion_tratamiento_medico: z.string().optional()
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is reqired" })
    .email({ message: "Invalid Email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 characters" }),
});

export { registerUserSchema, loginSchema };

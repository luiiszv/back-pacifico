// @types/express.d.ts
import express from 'express';

import { Types } from "mongoose";

import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

declare global {
  namespace Express {
    export interface Request {
      user: jwtData;
    }
  }
}



export interface jwtData extends JwtPayload {
  _id: Types.ObjectId;
  id_user: number;
  email: string;
  rol_id: Types.ObjectId;
  modulo_id: Types.ObjectId;
}


// @types/express.d.ts
import express from 'express';

import { Types } from "mongoose";

import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

declare global {
  namespace Express {
    export interface Request {
      user: object;
    }
  }
}



export interface jwtData extends JwtPayload {
  id_user: string;
  email: string;
  rol_id: Types.ObjectId;



}


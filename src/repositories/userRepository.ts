import { Types } from "mongoose";
import UserModel from "../models/Usuarios";
import { IUserRequest } from "../types/user/user.request";
import { IUserResponse } from "../types/user/user.response";


export const getAll = async () => {
  return await UserModel.find();
};

export const createUser = async (user: IUserRequest) => {
  return await UserModel.create(user);
};

export const findUserByEmail = async (email: string): Promise<IUserResponse | null> => {
  const user = await UserModel.findOne({ email })
    .populate("rol_id")
    .populate("regional_id")
    .populate("centro_formacion_id")
    .populate("modulo_id")
    .lean();

  return user as IUserResponse;

};


export const findUserByNumeroDocumento = async (documento_identidad: string): Promise<IUserResponse | null> => {
  const user = await UserModel.findOne({ documento_identidad })
    .populate("rol_id")
    .populate("regional_id")
    .populate("centro_formacion_id")
    .populate("modulo_id")
    .lean();

  return user as IUserResponse;

};


export const findUserById = async (idUser: Types.ObjectId): Promise<IUserResponse | null> => {
  const user = await UserModel.findById(idUser)
    .populate("rol_id")
    .populate("regional_id")
    .populate("centro_formacion_id")
    .populate("modulo_id")
    .lean();

  return user as IUserResponse;

};

export const delteOneUser = async (_id: string) => {
  return await UserModel.deleteOne({ _id });
};


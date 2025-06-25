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
  return await UserModel.findOne({ email })
    .populate("rol_id")
    .populate("regional_id")
    .populate("centro_formacion_id")
    .populate("modulo_id")
    .lean();

};


export const findUserById = async (idUser: Types.ObjectId): Promise<IUserResponse | null> => {
  return await UserModel.findById(idUser)
    .populate("rol_id")
    .populate("regional_id")
    .populate("centro_formacion_id")
    .populate("modulo_id")
    .lean();

};

export const delteOneUser = async (_id: string) => {
  return await UserModel.deleteOne({ _id });
};


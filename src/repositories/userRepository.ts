import UserModel from "../models/Usuarios";
import { UserInterface } from "../types/user.types";

export const getAll = async () => {
  return await UserModel.find();
};

export const createUser = async (user: UserInterface) => {
  return await UserModel.create(user);
};

export const findUserByEmail = async (email: string): Promise<UserInterface | null> => {
 return await UserModel.findOne({ email: email }).select("+password");
};

export const delteOneUser = async (_id: string) => {
  return await UserModel.deleteOne({ _id });
};


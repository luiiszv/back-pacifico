
import { IUserRequest } from "../types/user/user.request";
import { hash, compare } from "bcrypt";
import {
  getAll,
  createUser,
  findUserByEmail,
  delteOneUser,
  findUserById
} from "../repositories/userRepository";

import { createAccessToken } from "../libs/jwt";

//RolRepository
import { RolRepository } from "../repositories/rolRepository";



import { validateToken } from "../middleware/auth";

import { buildError, buildSuccess } from "../utils/baseResponse";
import { id } from "zod/v4/locales";
import { Types } from "mongoose";
import { IUserResponse } from "../types/user/user.response";


const rolRepository = new RolRepository();

/**
 * Registar usuario
 * @params user
 * @returns
 */

const insertUser = async (user: IUserRequest) => {

  const { rol_id } = user;

  const rolExist = await rolRepository.findRolById(rol_id);

  if (!rolExist) {
    return {
      success: false,
      message: "Role not found",
    };
  }

  const passwordHashed = await hash(user.password, 10);
  const userPassHashed = { ...user, password: passwordHashed };
  const response = await createUser(userPassHashed);
  return {
    success: true,
    message: "User registred",
    data: response,
  };
};

/**
 * Consultar un usuario
 * @params email
 * @returns
 */
const getUser = async (email: string) => {
  const response = await findUserByEmail(email);
  return {
    success: true,
    message: "User Found",
    data: response,
  };
};

/**
 * Consultar todos los usuarios
 * @params -
 * @returns Users
 */
const findUsers = async () => {
  const response = await getAll();
  return {
    success: true,
    data: response,
  };
};

/**
 * Elimiar usuarios
 * @params id_user
 * @returns
 */
const deleteUser = async (_id: string) => {
  const response = await delteOneUser(_id);
  return {
    seccess: true,
    message: "User Deleted",
    data: response,
  };
};

/**
 * Login user
 * @params email, password
 * @returns token
 */

const loginUser = async (email: string, password: string) => {
  const userExist = await findUserByEmail(email);
  if (!userExist) {
    return {
      success: false,
      message: "User not found",
    };
  }

  const match = await compare(password, userExist.password);
  if (!match) {
    return {
      success: false,
      message: "Incorrect Password",
    };
  }
  const payload = {
    _id: userExist._id,
    id_user: userExist.id_user, //Room
    rol_id: userExist.rol_id,
    modulo_id: userExist.modulo_id,
    email: userExist.email,
  };

  const token = await createAccessToken(payload);

  console.log(token);
  return {
    user: userExist,
    token,

  };
};


const getUserById = async (idUser: Types.ObjectId) => {

  const user = await findUserById(idUser)

  if (!user) {
    return buildError("User not found", 404);
  }

  return buildSuccess(user, "Usuario encontrado");
};
export { insertUser, getUser, findUsers, deleteUser, loginUser, getUserById };


import { IUserRequest } from "../types/user/user.request";
import { hash, compare } from "bcrypt";
import {
  getAll,
  createUser,
  findUserByEmail,
  delteOneUser,
  findUserById,
  findUserByNumeroDocumento
} from "../repositories/userRepository";

import { createAccessToken } from "../libs/jwt";

import { validateToken } from "../middleware/auth";

import { buildError, buildSuccess } from "../utils/baseResponse";
import { id } from "zod/v4/locales";
import { Types } from "mongoose";
import { IUserResponse } from "../types/user/user.response";
//Repository
import { RolRepository } from "../repositories/rolRepository";
import { CentroFormacionRepository } from "../repositories/centrosFormacion.repository";
import { ModuloRepository } from "../repositories/modulo.repository";
import { RegionalRepository } from "../repositories/regional.respository";



//Instance
const rolRepository = new RolRepository();
const centroFormacionRepository = new CentroFormacionRepository();
const moduloRepository = new ModuloRepository();
const regionalRepository = new RegionalRepository();







/**
 * Registar usuario
 * @params user
 * @returns
 */

const insertUser = async (user: IUserRequest) => {
  const {
    id_rol,
    id_modulo,
    id_regional,
    id_centro_formacion,
    password,
    email,
    documento_identidad,
  } = user;

  // ❌ Validar si ya existe un usuario con el mismo email
  const userExist = await findUserByEmail(email);
  if (userExist) {
    return buildError("El email ya está registrado", [{ path: "email", message: "Este correo ya existe" }], 409);
  }



  const userByDoc = await findUserByNumeroDocumento(documento_identidad);
  if (userByDoc) {
    return buildError(
      "Número de Documento ya registrado",
      [{ path: "documento_identidad", message: "Este documento ya existe" }],
      409
    );
  }

  // ✅ Validar entidades relacionadas en paralelo
  const [rol, centroFormacion, regional, modulo] = await Promise.all([
    rolRepository.findRolByIdRol(id_rol),
    centroFormacionRepository.findCentroFormaiconByIdCentroFormacion(id_centro_formacion),
    regionalRepository.findRegionalByIdRegional(id_regional),
    id_modulo != null ? moduloRepository.findModuloByIdModulo(id_modulo) : Promise.resolve(null)
  ]);


  if (!rol) return buildError("Rol no encontrado", [{ path: "id_rol", message: "El rol especificado no existe" }], 404);
  if (!centroFormacion) return buildError("Centro de formación no encontrado", [{ path: "id_centro_formacion", message: "El centro de formación no existe" }], 404);
  if (!regional) return buildError("Regional no encontrada", [{ path: "id_regional", message: "La regional especificada no existe" }], 404);
  if (id_modulo != null && !modulo)
    return buildError("Módulo no encontrado", [{ path: "id_modulo", message: "El módulo especificado no existe" }], 404);

  const passwordHashed = await hash(password, 10);

  // 📝 Preparar objeto con referencias internas
  const userToSave = {
    ...user,
    password: passwordHashed,
    rol_id: rol._id,
    centro_formacion_id: centroFormacion._id,
    regional_id: regional._id,
    modulo_id: modulo?._id || null
  };

  const response = await createUser(userToSave);

  return buildSuccess(response, "Usuario creado correctamente");
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


const logOutUser = async () => {

  return buildSuccess([], "Ok", 200)

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
    return buildError(
      "Usuario no encontrado",
      [{ path: "email", message: "No existe un usuario registrado con este correo" }],
      401
    );
  }


  const match = await compare(password, userExist.password);
  if (!match) {
    return buildError("Contraseña incorrecta", [{ path: "password", message: "Contraseña Incorrecta" }], 401);
  }

  const payload = {
    _id: userExist._id,
    id_user: userExist.id_user,
    rol_id: userExist.rol_id,
    modulo_id: userExist.modulo_id,
    email: userExist.email,
  };

  const { token } = await createAccessToken(payload);

  return buildSuccess(
    {
      user: userExist,
      token: token
    },
    "Login exitoso"
  );
};



const getUserById = async (idUser: Types.ObjectId) => {

  const user = await findUserById(idUser)

  if (!user) {
    return buildError("User not found", [{ path: "_id", message: "User not Found" }], 404);
  }

  return buildSuccess(user, "Usuario encontrado", 200);
};
export { insertUser, getUser, findUsers, deleteUser, loginUser, getUserById, logOutUser };

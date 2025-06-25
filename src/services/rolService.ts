import { RolInterface } from "../types/rol/rol.types";
import { RolRepository } from "../repositories/rolRepository";
import { Types } from "mongoose";

const rolRepository = new RolRepository();

/**
 * Consultar Roles
 * @params
 * @returns
 */

const findRoles = async () => {
  const roles = await rolRepository.getAllRols();
  return {
    susccess: true,
    data: roles,
  };
};



const findRolId = async (id: Types.ObjectId) => {
  const rol = await rolRepository.findRolById(id);
  return {
    success: true,
    data: rol,
  };
};

/**
 * Registrar Roles
 * @params
 * @returns
 */

const InsertRoles = async (rol: RolInterface) => {

  const response = await rolRepository.createRol(rol);

  return {
    success: true,
    message: "Rol created",
    data: response,
  };




};

/**
 * Eliminar Roles
 * @params _id Rol
 * @returns
 */

const dropRol = async (_id: string) => {
  const response = await rolRepository.findAndDeleteRol(_id);

  return {
    success: true,
    message: "Rol was deleted",
    data: response,
  };
};


/**
 * Añadir Modulos al Roles
 * @params _id Rol
 * @returns
 */



export { findRoles, InsertRoles, dropRol, findRolId };

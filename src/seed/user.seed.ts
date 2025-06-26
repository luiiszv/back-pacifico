
import UserModel from "../models/Usuarios";

import { insertUser } from "../services/userService";
import { IUserRequest } from "../types/user/user.request";
import { Types } from "mongoose";

export const runUserSeed = async () => {
    const count = await UserModel.countDocuments();
    await UserModel.deleteMany({});

    const usuario: IUserRequest = {

        id_rol: 1,
        id_modulo: null,
        id_regional: 10,
        id_centro_formacion: 44,
        tipo_documento_identidad: "CC",
        documento_identidad: "1002953841",
        nombres: "Luis",
        apellidos: "Martínez",
        rh: "O+",
        tratamiento_medico: false,
        descripcion_tratamiento_medico: "-",
        email: "luis@gmail.com",
        password: "luis1234",
        estado: true,
    };



    await insertUser(usuario); // Crea el primer usuario
    console.log(`-- Colección 'usuarios' limpia. ${count}`);

    console.log("-- Usuarios insertados correctamente.");
};



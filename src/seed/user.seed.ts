
import UserModel from "../models/Usuarios";

import { insertUser } from "../services/userService";
import { IUserRequest } from "../types/user/user.request";
import { Types } from "mongoose";

export const runUserSeed = async () => {
    const count = await UserModel.countDocuments();

    const usuario: IUserRequest = {
        rol_id: new Types.ObjectId("685c182bfaae605c185aa5a7"),
        modulo_id: null,
        regional_id: new Types.ObjectId("685c16c7ebc84dd3b410c8c7"),
        centro_formacion_id: new Types.ObjectId("685c17592a26897cec8c56eb"),
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



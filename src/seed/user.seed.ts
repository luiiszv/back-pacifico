
import UserModel from "../models/Usuarios";

export const runRolesSeed = async () => {
    const count = await UserModel.countDocuments();

    const usuarios = [
        {
            id_user: 1,
            rol_id: "685b1dd4df33b98b6fffd9b7", // Rol: Administrador
            modulo_id: null,
            regional_id: "665b1aa6bc1793fbeea74d1a", // Reemplaza con el _id real de tu regional
            centro_formacion_id: "665b1bb1e927da8c4fb48f3e", // Reemplaza con el _id real del centro
            tipo_documento_identidad: "CC",
            documento_identidad: "100000001",
            nombres: "Luis",
            apellidos: "Administrador",
            rh: "O+",
            tratamiento_medico: false,
            descripcion_tratamiento_medico: null,
            email: "admin@pacifico.com",
            email_verified_at: new Date(),
            password: "admin1234", // Recuerda hashear antes de guardar
            estado: true,
        },
        {
            id_user: 2,
            rol_id: "685b1dd4df33b98b6fffd9b7", // Otro rol si deseas cambiar
            modulo_id: null,
            regional_id: "665b1aa6bc1793fbeea74d1a",
            centro_formacion_id: "665b1bb1e927da8c4fb48f3e",
            tipo_documento_identidad: "CC",
            documento_identidad: "100000002",
            nombres: "María",
            apellidos: "García",
            rh: "A+",
            tratamiento_medico: false,
            descripcion_tratamiento_medico: null,
            email: "maria@pacifico.com",
            email_verified_at: null,
            password: "maria1234", // También hashear antes de guardar
            estado: true,
        },
    ];


    await UserModel.deleteMany({});
    console.log(`-- Colección 'usuarios' limpia. ${count}`);
    await UserModel.insertMany(usuarios);
    console.log("-- Usuarios insertados correctamente.");
};



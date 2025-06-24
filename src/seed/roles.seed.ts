
import RolModel from "../models/Roles";

export const runRolesSeed = async () => {
    const count = await RolModel.countDocuments();

    const roles = [
        {
            id_rol: 1,
            nombre: "Administrador",
            descripcion: "Rol (Super) con acceso total al sistema, puede gestionar usuarios, roles, módulos, etc.",
        },
        {
            id_rol: 2,
            nombre: "LiderEquipo",
            descripcion: "Rol con acceso a la gestión de usuarios y equipos, puede asignar tareas y supervisar.",
        },
        {
            id_rol: 3,
            nombre: "Caracterizador",
            descripcion: "Rol con acceso a la gestión de caracterización de usuarios, puede editar fichas de caracterización.",
        },
    ];

    await RolModel.deleteMany({});
    console.log(`-- Colección 'roles' limpia. ${count}`);
    await RolModel.insertMany(roles);
    console.log("-- Roles insertados correctamente.");
};

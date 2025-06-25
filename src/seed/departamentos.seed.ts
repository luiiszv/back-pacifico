

// src/seed/runDepartamentosSeed.ts
import DepartamentoModel from "../models/Departamento";

export const runDepartamentosSeed = async () => {
    const count = await DepartamentoModel.countDocuments();


    const departamentos = [
        { id_departamento: 1, codigo_departamento: "05", nombre: "ANTIOQUIA" },
        { id_departamento: 2, codigo_departamento: "08", nombre: "ATLANTICO" },
        { id_departamento: 3, codigo_departamento: "11", nombre: "BOGOTA, D.C." },
        { id_departamento: 4, codigo_departamento: "13", nombre: "BOLIVAR" },
        { id_departamento: 5, codigo_departamento: "15", nombre: "BOYACA" },
        { id_departamento: 6, codigo_departamento: "17", nombre: "CALDAS" },
        { id_departamento: 7, codigo_departamento: "18", nombre: "CAQUETA" },
        { id_departamento: 8, codigo_departamento: "19", nombre: "CAUCA" },
        { id_departamento: 9, codigo_departamento: "20", nombre: "CESAR" },
        { id_departamento: 10, codigo_departamento: "23", nombre: "CORDOBA" },
        { id_departamento: 11, codigo_departamento: "25", nombre: "CUNDINAMARCA" },
        { id_departamento: 12, codigo_departamento: "27", nombre: "CHOCO" },
        { id_departamento: 13, codigo_departamento: "41", nombre: "HUILA" },
        { id_departamento: 14, codigo_departamento: "44", nombre: "LA GUAJIRA" },
        { id_departamento: 15, codigo_departamento: "47", nombre: "MAGDALENA" },
        { id_departamento: 16, codigo_departamento: "50", nombre: "META" },
        { id_departamento: 17, codigo_departamento: "52", nombre: "NARIÑO" },
        { id_departamento: 18, codigo_departamento: "54", nombre: "NORTE DE SANTANDER" },
        { id_departamento: 19, codigo_departamento: "63", nombre: "QUINDIO" },
        { id_departamento: 20, codigo_departamento: "66", nombre: "RISARALDA" },
        { id_departamento: 21, codigo_departamento: "68", nombre: "SANTANDER" },
        { id_departamento: 22, codigo_departamento: "70", nombre: "SUCRE" },
        { id_departamento: 23, codigo_departamento: "73", nombre: "TOLIMA" },
        { id_departamento: 24, codigo_departamento: "76", nombre: "VALLE DEL CAUCA" },
        { id_departamento: 25, codigo_departamento: "81", nombre: "ARAUCA" },
        { id_departamento: 26, codigo_departamento: "85", nombre: "CASANARE" },
        { id_departamento: 27, codigo_departamento: "86", nombre: "PUTUMAYO" },
        { id_departamento: 28, codigo_departamento: "88", nombre: "ARCHIPIELAGO DE SAN ANDRES PROVIDENCIA Y SANTA CATALINA" },
        { id_departamento: 29, codigo_departamento: "91", nombre: "AMAZONAS" },
        { id_departamento: 30, codigo_departamento: "94", nombre: "GUAINIA" },
        { id_departamento: 31, codigo_departamento: "95", nombre: "GUAVIARE" },
        { id_departamento: 32, codigo_departamento: "97", nombre: "VAUPES" },
        { id_departamento: 33, codigo_departamento: "99", nombre: "VICHADA" }
    ]



    await DepartamentoModel.deleteMany({});
    console.log(`-- Colección 'departamentos' limpia. ${count}`);
    await DepartamentoModel.insertMany(departamentos);
    console.log("-- Departamentos insertados correctamente.");
};

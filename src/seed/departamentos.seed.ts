

// src/seed/runDepartamentosSeed.ts
import DepartamentoModel from "../models/Departamento";

export const runDepartamentosSeed = async () => {
    const count = await DepartamentoModel.countDocuments();


    const departamentos = [
        {
            "id_departamento": 1,
            "codigo_departamento": "05",
            "nombre": "Antioquia",
            "descripcion": ""
        },
        {
            "id_departamento": 2,
            "codigo_departamento": "08",
            "nombre": "Atlántico",
            "descripcion": ""
        },
        {
            "id_departamento": 3,
            "codigo_departamento": "11",
            "nombre": "Bogotá, D.C.",
            "descripcion": ""
        },
        {
            "id_departamento": 4,
            "codigo_departamento": "13",
            "nombre": "Bolívar",
            "descripcion": ""
        },
        {
            "id_departamento": 5,
            "codigo_departamento": "15",
            "nombre": "Boyacá",
            "descripcion": ""
        },
        {
            "id_departamento": 6,
            "codigo_departamento": "17",
            "nombre": "Caldas",
            "descripcion": ""
        },
        {
            "id_departamento": 7,
            "codigo_departamento": "18",
            "nombre": "Caquetá",
            "descripcion": ""
        },
        {
            "id_departamento": 8,
            "codigo_departamento": "19",
            "nombre": "Cauca",
            "descripcion": ""
        },
        {
            "id_departamento": 9,
            "codigo_departamento": "20",
            "nombre": "Cesar",
            "descripcion": ""
        },
        {
            "id_departamento": 10,
            "codigo_departamento": "23",
            "nombre": "Córdoba",
            "descripcion": ""
        },
        {
            "id_departamento": 11,
            "codigo_departamento": "25",
            "nombre": "Cundinamarca",
            "descripcion": ""
        },
        {
            "id_departamento": 12,
            "codigo_departamento": "27",
            "nombre": "Chocó",
            "descripcion": ""
        },
        {
            "id_departamento": 13,
            "codigo_departamento": "41",
            "nombre": "Huila",
            "descripcion": ""
        },
        {
            "id_departamento": 14,
            "codigo_departamento": "44",
            "nombre": "La Guajira",
            "descripcion": ""
        },
        {
            "id_departamento": 15,
            "codigo_departamento": "47",
            "nombre": "Magdalena",
            "descripcion": ""
        },
        {
            "id_departamento": 16,
            "codigo_departamento": "50",
            "nombre": "Meta",
            "descripcion": ""
        },
        {
            "id_departamento": 17,
            "codigo_departamento": "52",
            "nombre": "Nariño",
            "descripcion": ""
        },
        {
            "id_departamento": 18,
            "codigo_departamento": "54",
            "nombre": "Norte de Santander",
            "descripcion": ""
        },
        {
            "id_departamento": 19,
            "codigo_departamento": "63",
            "nombre": "Quindío",
            "descripcion": ""
        },
        {
            "id_departamento": 20,
            "codigo_departamento": "66",
            "nombre": "Risaralda",
            "descripcion": ""
        },
        {
            "id_departamento": 21,
            "codigo_departamento": "68",
            "nombre": "Santander",
            "descripcion": ""
        },
        {
            "id_departamento": 22,
            "codigo_departamento": "70",
            "nombre": "Sucre",
            "descripcion": ""
        },
        {
            "id_departamento": 23,
            "codigo_departamento": "73",
            "nombre": "Tolima",
            "descripcion": ""
        },
        {
            "id_departamento": 24,
            "codigo_departamento": "76",
            "nombre": "Valle del Cauca",
            "descripcion": ""
        },
        {
            "id_departamento": 25,
            "codigo_departamento": "81",
            "nombre": "Arauca",
            "descripcion": ""
        },
        {
            "id_departamento": 26,
            "codigo_departamento": "85",
            "nombre": "Casanare",
            "descripcion": ""
        },
        {
            "id_departamento": 27,
            "codigo_departamento": "86",
            "nombre": "Putumayo",
            "descripcion": ""
        },
        {
            "id_departamento": 28,
            "codigo_departamento": "88",
            "nombre": "San Andrés y Providencia",
            "descripcion": ""
        },
        {
            "id_departamento": 29,
            "codigo_departamento": "91",
            "nombre": "Amazonas",
            "descripcion": ""
        },
        {
            "id_departamento": 30,
            "codigo_departamento": "94",
            "nombre": "Guainía",
            "descripcion": ""
        },
        {
            "id_departamento": 31,
            "codigo_departamento": "95",
            "nombre": "Guaviare",
            "descripcion": ""
        },
        {
            "id_departamento": 32,
            "codigo_departamento": "97",
            "nombre": "Vaupés",
            "descripcion": ""
        },
        {
            "id_departamento": 33,
            "codigo_departamento": "99",
            "nombre": "Vichada",
            "descripcion": ""
        }
    ]


    await DepartamentoModel.deleteMany({});
    console.log(`-- Colección 'departamentos' limpia. ${count}`);
    await DepartamentoModel.insertMany(departamentos);
    console.log("-- Departamentos insertados correctamente.");
};

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as XLSX from 'xlsx';
import Departamento from '../models/Departamento';

import Regionales from "../models/Regionales";


dotenv.config();



const importarDesdeExcel = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('✅ Conectado a MongoDB');


    // ✅ Corregido para que acepte string como _id
    // await (mongoose.connection.collection('counters') as any).deleteMany({
    //   _id: { $in: ['id_departamento', 'id_municipio', 'id_centro_poblado'] }
    // });
    // console.log('🔁 Contadores de autoincremento reiniciados');




    const workbook = XLSX.readFile('dataRegional.xlsx');
    const sheetName = 'regional';

    if (!workbook.SheetNames.includes(sheetName)) {
      console.error(`❌ La hoja "${sheetName}" no se encontró`);
      return;
    }

    // const data = XLSX.utils.sheet_to_json<any>(workbook.Sheets[sheetName]);

    const data = XLSX.utils.sheet_to_json<any>(workbook.Sheets[sheetName]);

    //    await mongoose.connection.collection('centrospoblados').dropIndex('municipio_id_1').catch(() => {});
    // console.log('🔁 Índice municipio_id eliminado');

    // await Departamento.deleteMany({});
    // await Municipio.deleteMany({});
    // await CentroPoblado.deleteMany({});
    // console.log('🧹 Colecciones limpiadas');



    for (const row of data) {
      const nombre = row['regional']?.toString().trim();
      const codigo_departamento = row['Código Departamento']?.toString().trim();


      // Validación
      if (!codigo_departamento || !nombre) {
        console.warn('⚠️ Fila incompleta, se omite:', row);
        continue;
      }

      // DEPARTAMENTO 
      let departamento = await Departamento.findOne({ codigo_departamento });

      if (!departamento) {

        console.log(`❌ Departamento no encontrado: ${codigo_departamento}`);
        continue
      }

      // Verifica si ya existe una regional con el mismo nombre en el departamento
      const regionalExistente = await Regionales.findOne({ nombre, departamento_id: departamento._id });

      if (regionalExistente) {
        console.log(`🔁 Regional ya existe: ${nombre}`);
        continue;
      }

      await Regionales.create({
        departamento_id: departamento._id,
        id_departamento: departamento.id_departamento, // Asegúrate de que este campo
        nombre
      });

      console.log(`✔ Regional insertado: ${nombre}`);
    }

    console.log('🎉 Importación completa');
  } catch (err) {
    console.error('❌ Error al importar:', err);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Conexión cerrada');
  }
};

importarDesdeExcel();

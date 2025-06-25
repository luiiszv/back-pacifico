
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as XLSX from 'xlsx';

import Regionales from "../models/Regionales";

import CentrosFormacion from "../models/CentrosFormacion";


dotenv.config();



const importarDesdeExcel = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('✅ Conectado a MongoDB');


   




    const workbook = XLSX.readFile('data_centro_formacion.xlsx');
    const sheetName = 'centros';

    if (!workbook.SheetNames.includes(sheetName)) {
      console.error(`❌ La hoja "${sheetName}" no se encontró`);
      return;
    }

    // const data = XLSX.utils.sheet_to_json<any>(workbook.Sheets[sheetName]);

    const data = XLSX.utils.sheet_to_json<any>(workbook.Sheets[sheetName]);




    for (const row of data) {
      const id_regional = row['id_regional']?.toString().trim();
      const nombreCentroFormacion = row['centro_formacion']?.toString().trim();
      const direccionCentroFormacion = row['direccion_centro']?.toString().trim();



      // Validación
      if (!id_regional || !nombreCentroFormacion || !direccionCentroFormacion) {
        console.warn('⚠️ Fila incompleta, se omite:', row);
        continue;
      }

      let regional = await Regionales.findOne({ id_regional });

      if (!regional) {
        console.log(`❌ Regional no encontrado: ${id_regional}`);
        continue;
      }

      await CentrosFormacion.create({
        regional_id: regional._id,
        id_regional: regional.id_regional,
        nombre: nombreCentroFormacion,
        direccion: direccionCentroFormacion
      });

      console.log(`✔ Centro de Formación insertado: ${nombreCentroFormacion}`);
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

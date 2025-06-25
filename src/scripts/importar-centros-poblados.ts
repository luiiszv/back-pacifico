import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as XLSX from 'xlsx';
import Departamento from '../models/Departamento';
import Municipio from '../models/Municipios';
import CentroPoblado from '../models/CentrosPoblados';

dotenv.config();



const importarDesdeExcel = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('✅ Conectado a MongoDB');


    // ✅ Corregido para que acepte string como _id
    await (mongoose.connection.collection('counters') as any).deleteMany({
      _id: { $in: ['id_departamento', 'id_municipio', 'id_centro_poblado'] }
    });
    console.log('🔁 Contadores de autoincremento reiniciados');




    const workbook = XLSX.readFile('nbi.xls');
    const sheetName = 'Listado Vigentes';

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
      const codigo_departamento = row['Código Departamento']?.toString().trim();
      const codigo_municipio = row['Código Municipio']?.toString().trim();
      const codigo_centro_poblado = row['Código Centro Poblado']?.toString().trim();
      const nombre_departamento = row['Nombre Departamento']?.trim();
      const nombre_municipio = row['Nombre Municipio']?.trim();
      const nombre_centro_poblado = row['Nombre Centro Poblado']?.trim();
      const tipo = row['Tipo']?.trim();

      // Validación
      if (!codigo_departamento || !nombre_departamento || !codigo_municipio || !nombre_municipio || !codigo_centro_poblado || !nombre_centro_poblado) {
        console.warn('⚠️ Fila incompleta, se omite:', row);
        continue;
      }

      // DEPARTAMENTO 
      let departamento = await Departamento.findOne({ codigo_departamento });

      if (!departamento) {
        departamento = await Departamento.create({
          codigo_departamento,
          nombre: nombre_departamento
        });
        console.log(`✔ Departamento insertado: ${nombre_departamento} Codigo (${codigo_departamento})`);
      }

      // MUNICIPIO
      let municipio = await Municipio.findOne({ codigo_municipio });

      if (!municipio) {
        municipio = await Municipio.create({

          codigo_municipio,
          departamento_id: departamento._id,
          id_departamento: departamento.id_departamento, //room
          nombre: nombre_municipio,
        });
        console.log(`✔ Municipio insertado: ${nombre_municipio}`);
      }

      // CENTRO POBLADO
      const yaExisteCentro = await CentroPoblado.findOne({ codigo_centro_poblado });

      if (yaExisteCentro) {
        console.log(`🔁 Centro poblado ya existe: ${nombre_centro_poblado}`);
        continue;
      }

      await CentroPoblado.create({
        codigo_centro_poblado,
        municipio_id: municipio._id,
        id_municipio: municipio.id_municipio, // Room
        nombre: nombre_centro_poblado,
        tipo: tipo || 'C', // Asignar tipo por defecto si no se proporciona
      });

      console.log(`✔ Centro poblado insertado: ${nombre_centro_poblado}`);
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

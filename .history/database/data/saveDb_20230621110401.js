import { Indicadores } from "../db.js";
import dataApi from "./dataApi.js";

//* Función para guardar los datos extraídos de la API en la base de datos
const saveDb = async () => {
  let data = await dataApi();
  try {
    data = data.map(datos => {
      return {
        nombreIndicador: datos.nombreIndicador,
        codigoIndicador: datos.codigoIndicador,
        unidadMedidaIndicador: datos.unidadMedidaIndicador,
        valorIndicador: datos.valorIndicador,
        fechaIndicador: datos.fechaIndicador,
        origenIndicador: datos.origenIndicador
      };
    });

    const savedData = await Indicadores.bulkCreate(data);

    console.log(`Se guardaron ${savedData.length} registros en la base de datos.`);
  } catch (error) {
    console.error("Error al guardar los datos en la base de datos:", error);
  }
};

export default saveDb;

import { Sequelize } from 'sequelize';
import saveDb from './data/saveDb.js';
import indicadoresModel from './models/Indicadores.js';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  native: false,
});

const Indicadores = indicadoresModel(sequelize);

sequelize.sync({ force: true }) // Configura la opción force a true para reiniciar la base de datos en cada reinicio del servidor
  .then(async () => {
    console.log('El modelo "Indicadores" se sincronizó correctamente con la base de datos.');
    await saveDb();
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo "Indicadores" con la base de datos:', error);
  });

export { sequelize, Indicadores };

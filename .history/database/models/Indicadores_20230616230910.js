import { DataTypes } from 'sequelize';

const indicadoresModel = (sequelize) => {
 
  const Indicadores = sequelize.define('indicadores', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreIndicador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigoIndicador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unidadMedidaIndicador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valorIndicador: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fechaIndicador: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    tiempoIndicador: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    origenIndicador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'indicadores',
    timestamps: false,
  });

  return Indicadores;
};

export default indicadoresModel;

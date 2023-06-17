
import { Op } from 'sequelize';
import { sequelize, Indicadores } from '../db.js';

export const allData = async (page, pageSize) => {
    const offset = (page - 1) * pageSize;

    const data = await Indicadores.findAll({
        offset,
        limit: pageSize,
    });

    const totalCount = await Indicadores.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    return { data, totalPages };
};


export const dataId = async (id) => {
    const data = await Indicadores.findByPk(id)
    return data;
}

export const dataByName = async (name) => {
    const data = await Indicadores.findAll({
        where: {
            nombreIndicador: {
                [Op.iLike]: `%${name}%`,
            }
        }
    })
    const totalPages = await Indicadores.count({
        where: {
            nombreIndicador: {
                [Op.iLike]: `%${name}%`,
            }
        }
    })

    return { data, totalPages };
}

export const dataByDate = async (date) => {
    const data = await Indicadores.findAll({
        where: { fechaIndicador: date }
    })
    const totalPages = await Indicadores.count({
        where: { fechaIndicador: date }
    })

    return { data, totalPages };
}
export const dataByMonth = async (month) => {
    const data = await Indicadores.findAll({
        where: sequelize.where(sequelize.fn('MONTH', sequelize.col('fechaIndicador')), month)
    });
    const totalPages = await Indicadores.count({
        where: sequelize.where(sequelize.fn('MONTH', sequelize.col('fechaIndicador')), month)
    });

    return { data, totalPages };
};

export const dataByYear = async (year) => {
    const data = await Indicadores.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('fechaIndicador')), year)
    });
    const totalPages = await Indicadores.count({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('fechaIndicador')), year)
    });

    return { data, totalPages };
};

export const searchDataByYearAndMonth = async (year, month) => {
    const startDate = `${year}-${month}-01`;
    const endDate = `${year}-${month}-31`;

    const data = await Indicadores.findAll({
        where: {
            fechaIndicador: {
                [Op.between]: [startDate, endDate],
            },
        },
    });
    const totalPages = await Indicadores.count({
        where: {
            fechaIndicador: {
                [Op.between]: [startDate, endDate],
            }
        }
    });

    return { data, totalPages };
};

export const createData = async (newData) => {
    const data = await Indicadores.create(newData);
    return data;
};

export const updateData = async (id, updatedData) => {
    const data = await Indicadores.findByPk(id);

    if (!data) {
        throw new Error("The requested indicator does not exist.");
    }

    data.nombreIndicador = updatedData.nombreIndicador || data.nombreIndicador;
    data.codigoIndicador = updatedData.codigoIndicador || data.codigoIndicador;
    data.unidadMedidaIndicador = updatedData.unidadMedidaIndicador || data.unidadMedidaIndicador;
    data.valorIndicador = updatedData.valorIndicador || data.valorIndicador;
    data.fechaIndicador = updatedData.fechaIndicador || data.fechaIndicador;
    data.tiempoIndicador = updatedData.tiempoIndicador || data.tiempoIndicador;
    data.origenIndicador = updatedData.origenIndicador || data.origenIndicador;

    await data.save();

    return data;
};

export const deleteData= async (id) => {
    try {
        const indicator = await Indicadores.findByPk(id);

        if (!indicator) {
            throw new Error('The requested indicator does not exist.');
        }

        await indicator.destroy();

        return indicator
    } catch (error) {
        throw new Error('Error deleting the indicator.');
    }
}

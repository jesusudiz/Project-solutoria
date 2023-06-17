import axios from 'axios';
import getToken from './getToken.js';

const URL = 'https://postulaciones.solutoria.cl/api/indicadores';

const dataApi = async () => {
  const JWT = await getToken();
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${JWT}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error.response);
  }
};

export default dataApi;

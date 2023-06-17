import axios from 'axios';

async function getToken() {
  try {
    const url = 'https://postulaciones.solutoria.cl/api/acceso';

    const datos = {
      userName: 'jesusgabrieludiz@gmail.com',
      flagJson: true
    };

    const response = await axios.post(url, datos);

    return response.data.token;
  } catch (error) {
    console.error('Error al obtener el token:', error.response);
  }
}

export default getToken;

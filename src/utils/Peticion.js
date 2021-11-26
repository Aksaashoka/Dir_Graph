import axios from 'axios';

export const peticion = async url => {
  try {
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

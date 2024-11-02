import axiosInstance from "../axiosInstance";

export const getLanguajes  = async () => { // Reemplazar por Query
  try {
    const response = await axiosInstance.get(`/v1/values/languajes`);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

export const getProfessions = async () => { // Reemplazar por Query
  try {
    const response = await axiosInstance.get(`/v1/values/professions`);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

export const getFrameworks = async () => { // Reemplazar por Query
  try {
    const response = await axiosInstance.get(`/v1/values/frameworks`);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

export const getAppLinks = async () => { // Reemplazar por Query
  try {
    const response = await axiosInstance.get(`/v1/values/applinks`);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

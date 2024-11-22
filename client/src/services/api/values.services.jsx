import axiosInstance from "../axiosInstance";

const mapRouteValues = {
  languajes: `/v1/values/languajes`,
  professions: `/v1/values/professions`,
  frameworks: `/v1/values/frameworks`,
  applinks: `/v1/values/applinks`,
  projectsStatus: `/v1/projects/status`,
  projectsPriority: `/v1/projects/priority`,
}

export const getValues = async (type) => { // Reemplazar por Query
  try {
    const response = await axiosInstance.get(mapRouteValues[type]);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};
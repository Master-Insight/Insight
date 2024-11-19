import axiosInstance from "../axiosInstance";

export const getProjects = async () => {
  try {
    const response = await axiosInstance.get(`/v1/projects`);    
    const projects = response.data?.data || null;
    return projects;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};
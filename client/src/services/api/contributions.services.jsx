import axiosInstance from "../axiosInstance";

// * CRUD BASICO

export const getContributions = async () => {
  try {
    const response = await axiosInstance.get(`/v1/contributions`);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

export const postContributions = async (data) => {
  try {
    const response = await axiosInstance.post(`/v1/contributions`, data);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

export const updateContribution  = async (id, data) => {
  if (!data) {
    const item = {};
    if (id.code) item.code = id.code;
    if (id.description) item.description = id.description;
    if (id.example) item.example = id.example;
    if (id.frameworks) item.frameworks = id.frameworks;
    if (id.languages) item.languages = id.languages;
    if (id.libraries) item.libraries = id.libraries;
    if (id.professions) item.professions = id.professions;
    if (id.links) item.links = id.links;
    if (id.title) item.title = id.title;

    id = id._id
    data = item
  }
  try {
    // console.log(id);
    // console.log(data);
    const response = await axiosInstance.put(`/v1/contributions/${id}`, data);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

export const deleteContribution = async (id) => {
  try {
    // console.log(id);    
    const response = await axiosInstance.delete(`/v1/contributions/${id}`);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

// * Varios

// Contribuciones de un usuario
export const getUserContributions = async (uid) => {
  try {
    const response = await axiosInstance.get(`v1/contributions/user/${uid}`);
    return response.data?.data || null;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};
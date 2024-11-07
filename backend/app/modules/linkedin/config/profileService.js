import axios from 'axios';

export const getProfileData = async (accessToken) => {
  try {
    const experienceResponse = await axios({
      url: 'https://api.linkedin.com/v2/experience', // Endpoint de experiencia
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    const educationResponse = await axios({
      url: 'https://api.linkedin.com/v2/education', // Endpoint de educación
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return {
      experience: experienceResponse.data,
      education: educationResponse.data,
    };
  } catch (error) {
    console.error('Error fetching LinkedIn data:', error.message);
    throw new Error('Unable to fetch LinkedIn profile data');
  }
};

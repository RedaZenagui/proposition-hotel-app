
import axios from 'axios';

const apiKey = 'bNsDb6GmME5lrn_3tkRgKaBv0YdGoOe3UeTsuP5Qo_5hxBHQsOUEZOioBkV_WusAWR-t9kAp9muppDy8uIGYFdfHdYNLSW-lnZGKpZ7-oHnR8msQ8v1OMUaCWomIZHYx';

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
});

export const getHotelProposals = async (location) => {
  try {
    const response = await api.get('/businesses/search', {
      params: {
        term: 'hotels',
        location: 'France',
      },
    });
    console.log('hawadi data')
    console.log(response.data)
    return response.data.businesses;
  } catch (error) {
    console.error('Erreur lors de la récupération des hôtels', error);
    throw error;
  }
};

export const fetchHotelDetails = async (id) => {
  try {
    const response = await api.get(`/businesses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de l\'hôtel', error);
    throw error;
  }
};

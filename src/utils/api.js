import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('../pokemon.json');
    return response.data;
  } catch (error) {
    throw error; 
  }
}

export { fetchData };
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

export const fetch = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        console.log(`${BASE_URL}${endpoint}`)
        console.error("Error fetching data: ", error);
        throw error;
    }
};
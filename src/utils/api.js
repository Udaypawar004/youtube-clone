import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const API_KEY = 'c1087030aamsh6213cfd0ddd56abp11130ajsn7dc12eae09e7';
console.log(API_KEY);

const options = {
  params: {
    q : 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    console.log(url);
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching data from API:", error);
    throw error;
  }
};

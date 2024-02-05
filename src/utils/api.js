import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_API_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const FetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${URL}`, options);
    return data;
};
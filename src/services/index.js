import axios from "axios";

export async function getTemperature(city) {
  const key = "63d816ad2332fc651bc33891519a32ae"
  const base = "https://api.openweathermap.org/data/2.5"
  const api_temp = `${base}/weather?q=${city}&appid=${key}`;
  const response = await axios.get(api_temp);
  return response.data;
}

export async function getPlaylist(category) {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {term: `${category}`, locale: 'en-US', offset: '0', limit: '5'},
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': '87eef8c17cmsh1f1d35924da15b1p18e00djsn52611a14b2f4'
    }
  };
  const response = await axios.request(options);
  return response.data.tracks;
}
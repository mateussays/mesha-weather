import axios from "axios";

export async function getTemperature(city, state) {
  const key = "af1a6b33"
  const base = "https://api.hgbrasil.com/"
  const api_temp = `${base}weather?format=json-cors&key=${key}&city_name=${city},${state}`;
  const response = await axios.get(api_temp);
  console.log(response)
  return response.data.results;
}
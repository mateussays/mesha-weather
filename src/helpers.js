export const convertToCelsius = (temperature) => {
  return Math.round(temperature) - 273;
}

export const temperaturePlaylist = (temperature) => {
  const celsius = convertToCelsius(temperature)
  if(celsius > 32) return 'Rock';
  if(celsius < 32 && celsius > 24) return 'Pop';
  if(celsius < 24 &&  celsius > 16) return 'Classic';
  else return 'Lofi';
}
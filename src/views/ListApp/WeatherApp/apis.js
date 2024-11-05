import axios from 'axios'

let apiKey = '27ab52b3fa96e42a15236a40eba8392f'
let unit = 'metric'

export const getWeatherData = async (city) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const response = await axios.get(url, { params: { q: city, units: unit, appid: apiKey } })
  return response.data
  // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=27ab52b3fa96e42a15236a40eba8392f`)
}

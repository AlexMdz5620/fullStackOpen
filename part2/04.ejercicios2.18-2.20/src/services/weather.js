import axios from "axios"

const baseURL = 'https://api.openweathermap.org/data/2.5/'
const apiKey = import.meta.env.VITE_APIKEY

const getWeather = (lat, lon) => {
    const request = axios.get(`${baseURL}weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    return request.then(res => res.data)
}

export default getWeather
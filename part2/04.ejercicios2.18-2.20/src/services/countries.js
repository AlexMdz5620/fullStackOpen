import axios from "axios";
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/"

const getAll = () => {
    const request = axios.get(`${baseURL}all`)
    return request.then(res => res.data)
}

const getByName = name => {
    const request = axios.get(`${baseURL}name/${name}`)
    return request.then(res => res.data)
}

export default { getAll, getByName }
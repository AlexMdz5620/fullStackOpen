import axios from "axios";
const baseURL = "/api/persons";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((res) => res.data);
};

const create = newObject => {
    const request = axios.post(baseURL, newObject);
    return request.then(res => res.data);
}

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then(res => res.data)
}

const deletePhone = idPhone => {
    const request = axios.delete(`${baseURL}/${idPhone}`);
    return request.then(res => res.data);
}

export default {
  getAll,
  create,
  update,
  deletePhone
};

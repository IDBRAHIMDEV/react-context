import axios from 'axios'

const urlApi = `http://localhost:3001/products`

export const getProducts = () => {
    return axios.get(urlApi)
} 
export const getProductById = (id) => {
    return axios.get(`${urlApi}/${id}`)
} 
export const postProduct = (data) => {
    return axios.post(urlApi, data)
} 
export const putProduct = (data, id) => {
    return axios.put(`${urlApi}/${id}`, data)
} 
export const patchProduct = (data, id) => {
    return axios.patch(`${urlApi}/${id}`, data)
} 
export const deleteProduct = (id) => {
    return axios.delete(`${urlApi}/${id}`)
} 
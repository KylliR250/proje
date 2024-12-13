import axios from "axios";
const api = "http://localhost:8080/api/shop";
export const fetchItems = () => axios.get(`${api}/items`)
export const fetchTotal = () => axios.get(`${api}/total`)
export const addItem = (expense) => axios.post(`${api}/add`, expense)
export const removeItem = (name) => axios.delete(`${api}/remove/${name}`)
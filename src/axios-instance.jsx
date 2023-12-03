import axios from "axios";
export const api = axios.create({
  baseURL: 'https://64f71de99d77540849531e37.mockapi.io/',
  headers: {
    'Content-type': 'application/json',
  },
})
export const apiProduct = axios.create({
  headers:{
    'Content-Type': 'application/json'
  },
  baseURL:'https://651b10c4194f77f2a5ae315d.mockapi.io/'
})
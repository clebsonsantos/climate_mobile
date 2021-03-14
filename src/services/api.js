
// https://api.hgbrasil.com/weather?key=46f8cfe4&lat=-23.682&lon=-46.875

import axios from 'axios'

export const key = process.env.KEY_API_HG;

const api = axios.create({
baseURL: 'https://api.hgbrasil.com'
})

export default api;
import axios from 'axios'
// Base da URL: https://api.themoviedb.org/3
// URL da API: /movie/now_playing?api_key=9b5ed32db059c939286588bdc597cb9d&language=pt-BR&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api
import axios from 'axios'; 

const api = axios.create({
    baseURL: 'https://notamais-backend01.herokuapp.com/'
});

export default api;
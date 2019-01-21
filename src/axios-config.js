import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://followupapi.herokuapp.com/api'
});

export default instance;
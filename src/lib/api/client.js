import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.kkwon.me',
    withCredentials:true,
});

export default client;
import axios from 'axios';

const client = axios.create({
    baseURL: 'http://api.kkwon.me',
    withCredentials:true,
});

export default client;
import axios from 'axios';

const client = axios.create({
    baseURL: 'http://54.180.186.118'
});

export default client;
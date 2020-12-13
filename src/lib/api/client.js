import axios from 'axios';

const client = axios.create({
    baseURL: 'http://api.kkwon.co.kr'
});

export default client;
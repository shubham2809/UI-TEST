import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://uitest-73c93.firebaseio.com/'
});

export default instance;
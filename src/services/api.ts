import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3333' });
const abort = axios.CancelToken;
export { api, abort };
export default api;

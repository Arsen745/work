import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'https://669fa4d0b132e2c136fe9740.mockapi.io/api/v1'
});
export default instanceAxios;


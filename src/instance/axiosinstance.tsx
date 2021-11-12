import axios from "axios";

const instance = axios.create({
    baseURL:"https://reqres.in/api/users"
});

export default instance
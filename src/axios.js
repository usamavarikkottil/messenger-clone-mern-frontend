import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:9000"
    baseURL: "https://messenger-mern-usama.herokuapp.com"
})

export default instance;
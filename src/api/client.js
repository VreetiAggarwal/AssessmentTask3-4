import axios from "axios";

//connect Axios API
const client = axios.create({ baseURL: "http://localhost:8000/api" });

export default client;

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
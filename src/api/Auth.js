import axios from "axios";
import { env } from "../utils/config";

const endpoint = `${env.baseUrl}/api/v1/auth`;

export default {
  login: (email, password) => {
    return axios.post(`${endpoint}/login`, { email, password });
  },
  validateToken: (token) => {
    return axios.get(`${endpoint}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  },
  logout: (/* token */) => {
    return axios.get(`${endpoint}/logout`,
      // {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // }
    )
  }
}
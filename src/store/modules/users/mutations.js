import axios from "axios";

export default {
  setAuthToken: (state, token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    state.token = token;
  },
  resetAuthentication: (state) => {
    state.token = null;
    state.user = null;
    delete axios.defaults.headers.common["Authorization"];
  },
  setUser: (state, user) => {
    state.user = user;
  }
}
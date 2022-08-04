import API from "@/api";

export default {
  async loginWithEmail({ commit, dispatch }, { email, password }) {
    try {
      const { data: result } = await API.Auth.login(email, password)
      console.log({ result });
      if (result.success) {
        const { user, accessToken } = result.data
        commit('setAuthToken', accessToken);
        commit('setUser', user);
        dispatch("ui/showToast", { show: true, message: "Logged In Successfully", sclass: "success", timeout: 3500 }, { root: true });
      }
      return result;
    } catch (error) {
      dispatch("ui/showToast", { show: true, message: error.response.data.message, sclass: "error", timeout: 3500 }, { root: true });
      commit("resetAuthentication");
      return error.response.data
    }
  },
  async logout({ commit, dispatch, state }) {
    try {
      if (state.authToken || state.user) {
        const result = await API.Auth.logout();
        dispatch("ui/showToast", { show: true, message: result.message, sclass: "info", timeout: 3500 }, { root: true });
      }
      commit("resetAuthentication")
    } catch (error) {
      dispatch("ui/showToast", { show: true, message: error.response.data.message, sclass: "error", timeout: 3500 }, { root: true });
      commit("resetAuthentication");
    }
  },
}
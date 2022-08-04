export default {
  user(state) {
    return state.user;
  },
  token(state) {
    return state.authToken;
  },
  isLoggedIn(state) {
    return Boolean(state.user)
  }
}
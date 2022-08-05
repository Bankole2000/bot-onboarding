import API from "@/api";

export default {
  async getQuestions({ commit, dispatch }) {
    dispatch("ui/showGlobalLoader", { show: true, message: "Loading..." }, { root: true });
    try {
      const { data: result } = await API.Questions.getQuestions();
      // console.log({ result });
      commit('setQuestions', result.data);
      return result;
    } catch (error) {
      console.log({ error });
      commit('setQuestions', []);
      return error.response.data;
      // dispatch("ui/showToast", { show: true, message: "questions"});
    } finally {
      dispatch("ui/showGlobalLoader", { show: false, message: "" }, { root: true });
    }
  },
  async answerQuestion({ commit }, { questionId, answer }) {
    try {
      const { data: result } = await API.Questions.sendAnswer(questionId, answer);
      // console.log({ result });
      commit('updateQuestionAnswer', result.data);
      return result;
    } catch (error) {
      console.log({ error });
      // commit('setQuestions', []);
      return error.response.data;
    }
  }
}
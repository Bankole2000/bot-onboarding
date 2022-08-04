export default {
  questions(state) {
    return state.questions;
  },
  userAnswerToQuestion: (state) => (questionId) => {
    const question = state.questions.find(q => q.questionId === questionId);
    if (question.answers) {
      return question.answers.length ? question.answers[0]['answer'] : "";
    }
    return ""
  }
}
export default {
  setQuestions: (state, questions) => {
    state.questions = questions;
  },
  updateQuestionAnswer: (state, answer) => {
    state.questions.forEach(q => {
      if (q.questionId === answer.questionId) {
        if (!q.answers) {
          q.answers = [];
        }
        if (q.answers.length) {
          q.answers.splice(0, q.answers.length)
        }
        q.answers.push(answer);
      }
    });
  }
}
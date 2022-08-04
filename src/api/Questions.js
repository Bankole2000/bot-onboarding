import axios from "axios";
import { env } from "../utils/config";

const endpoint = `${env.baseUrl}/api/v1/chat`;

export default {
  getQuestions: () => {
    return axios.get(`${endpoint}/chatbot/onboarding/questions`,
      // {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // }
    );
  },
  sendAnswer: (questionId, answer) => {
    return axios.post(`${endpoint}/chatbot/onboarding/question/${questionId}`, { answer },
      // {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // }
    )
  },
}
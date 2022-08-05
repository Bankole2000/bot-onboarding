<template>
  <div class="questions-page mt-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-container>
            <v-row>
              <v-col cols="11" md="6" offset-md="3">
                <p class="mb-0 ml-10">
                  Please answer <strong>at least 5</strong> questions
                </p>
              </v-col>
            </v-row>
          </v-container>
          <v-window v-model="activeQuestion">
            <v-window-item v-for="(q, i) in questions" :key="i" :value="i">
              <QuestionItem
                :question="q"
                :index="i"
                :total="questions.length"
                :active="activeQuestion === i"
                :givenAnswer="userAnswer(q.questionId)"
                @back="activeQuestion--"
                @questionAnswered="questionAnswered"
                @answerError="answerError"
              />
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import QuestionItem from "../components/blocks/QuestionItem.vue";
export default {
  components: {
    QuestionItem,
  },
  data() {
    return {
      activeQuestion: 0,
    };
  },
  computed: {
    ...mapGetters({
      questions: "questions/questions",
      userAnswer: "questions/userAnswerToQuestion",
      isLoggedIn: "users/isLoggedIn",
    }),
  },
  methods: {
    ...mapActions({
      showToast: "ui/showToast",
    }),
    answerError(e) {
      console.log({ e });
      this.showToast({
        show: true,
        message: e,
        timeout: 3000,
        sclass: "error",
      });
    },
    questionAnswered(e) {
      console.log({ e });
      this.showToast({
        message: "Answer Saved",
        show: true,
        timeout: 3000,
        sclass: "success",
      });
      if (this.activeQuestion === this.questions.length - 1) {
        this.$router.push({ name: "Complete" });
        return;
      }
      this.activeQuestion++;
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>
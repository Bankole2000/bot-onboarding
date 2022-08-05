<template>
  <div class="question-item">
    <v-container>
      <v-row>
        <v-col cols="11" md="8" offset-md="2">
          <v-card elevation="0" class="d-flex align-start">
            <div class="primary--text mt-11 mr-2">
              <div class="d-flex align-center">
                <p class="mb-0">{{ index + 1 }}</p>
                <v-icon color="primary">mdi-arrow-right</v-icon>
              </div>
              <div>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-if="index > 0"
                      @click="$emit('back')"
                      color="secondary"
                      elevation="1"
                      class="mt-8"
                      icon
                      v-bind="attrs"
                      v-on="on"
                      ><v-icon>mdi-arrow-left</v-icon></v-btn
                    >
                  </template>
                  <span>Previous Question</span>
                </v-tooltip>
              </div>
            </div>
            <div style="min-width: 95%">
              <p class="caption grey--text">
                Question {{ index + 1 }} of {{ total }}
              </p>
              <p class="display-1">{{ question.question }}</p>
              <v-textarea
                rows="1"
                placeholder="Type your answer here"
                label="Your answer"
                auto-grow
                :disabled="loading"
                style="font-size: 1.25rem"
                autofocus
                v-model="answer"
              ></v-textarea>
              <v-scroll-x-transition leave-absolute>
                <div v-show="!recording">
                  <div class="d-flex align-center">
                    <v-btn
                      icon
                      outlined
                      :loading="loading"
                      :disabled="loading"
                      elevation="2"
                      color="primary"
                      @click="startRecording"
                      ><v-icon color="secondary">mdi-microphone</v-icon></v-btn
                    >
                    <p class="mb-0 ml-4">
                      {{ loading ? "Saving..." : "Tap to record your answer" }}
                    </p>
                  </div>
                </div>
              </v-scroll-x-transition>
              <v-scroll-x-transition hide-on-leave>
                <div v-show="recording">
                  <div class="d-flex align-center">
                    <v-progress-circular
                      indeterminate
                      color="purple"
                      size="40"
                      width="3"
                    >
                      <v-btn
                        icon
                        small
                        outlined
                        elevation="2"
                        :disabled="loading"
                        color="primary"
                        @click="stopRecording"
                        ><v-icon color="secondary">mdi-stop</v-icon></v-btn
                      >
                    </v-progress-circular>
                    <p class="mb-0 ml-4">Recording... Tap to stop</p>
                  </div>
                </div>
              </v-scroll-x-transition>
              <div class="d-flex align-center my-6">
                <v-btn
                  :disabled="loading || recording"
                  rounded
                  :loading="loading"
                  @click="submitAnswer"
                  class="primary white--text py-2 text-capitalize mr-4"
                  >Okay <v-icon right>mdi-check</v-icon></v-btn
                >
                <p class="mb-0">or press <strong>Enter</strong></p>
                <v-icon size="28">mdi-keyboard-return</v-icon>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    question: {
      default: {
        questionId: "1234",
        question: "What is the question you want to answer?",
      },
    },
    givenAnswer: {
      default: "",
    },
    index: {
      default: 0,
    },
    total: {
      default: 17,
    },
    active: {
      default: false,
    },
  },
  data() {
    return {
      answer: "",
      recognition: null,
      recording: false,
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "users/isLoggedIn",
    }),
  },
  methods: {
    ...mapActions({
      showToast: "ui/showToast",
      sendAnswer: "questions/answerQuestion",
    }),
    startRecording() {
      // const SpeechRecognition =
      //   window.SpeechRecognition || window.webkitSpeechRecognition;
      // // const SpeechGrammarList =
      // //   window.SpeechGrammarList || window.webkitSpeechGrammarList;
      // // const SpeechRecognitionEvent =
      // //   window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
      // const recognition = new SpeechRecognition();
      // recognition.interimResults = true;
      // recognition.addEventListener("result", (e) => {
      //   const transcript = Array.from(e.results)
      //     .map((r) => r[0])
      //     .map((r) => r.transcript);
      //   this.answer = transcript;
      // });
      this.recognition.start();
      this.recording = true;
      console.log("Recording Started");
    },
    stopRecording() {
      this.recognition.stop();
      this.recording = false;
      console.log("Recording Stopped");
    },
    async submitAnswer() {
      // const { answer } = this.$data;
      if (this.loading || this.recording) {
        return;
      }
      this.loading = true;
      // console.log({ answer: this.answer });
      const result = await this.sendAnswer({
        questionId: this.question.questionId,
        answer: this.answer,
      });
      if (result.success) {
        this.$emit("questionAnswered", result.message);
      } else {
        this.$emit("answerError", result.message);
      }
      this.loading = false;
    },
  },
  mounted() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    this.recognition.continuous = true;
    this.recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((r) => r[0])
        .map((r) => r.transcript);
      this.answer = transcript.join(" ");
    });
    document.addEventListener("keypress", async (e) => {
      if (
        e.key === "Enter" &&
        this.active &&
        !this.recording &&
        this.isLoggedIn &&
        !e.altKey &&
        !e.shiftKey &&
        !e.ctrlKey
      ) {
        this.submitAnswer();
      }
    });
    this.answer = this.givenAnswer;
  },
};
</script>

<style>
</style>
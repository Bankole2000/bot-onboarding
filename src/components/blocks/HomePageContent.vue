<template>
  <div class="home-page-content">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <v-scroll-y-transition>
            <div v-show="!isLoggedIn">
              <v-card elevation="0" class="my-16 py-4">
                <p class="display-1 mb-2">
                  You need to be logged in to continue
                </p>
                <v-divider class="mb-4"></v-divider>
                <v-alert prominent type="info" text>
                  <p class="mb-0">
                    To continue, please login or use a valid link from the
                    <strong>Lugah Entertainment</strong> app.
                  </p>
                </v-alert>
              </v-card>
            </div>
          </v-scroll-y-transition>
          <v-scroll-y-transition>
            <div v-show="isLoggedIn">
              <v-card elevation="0" class="my-16 py-4">
                <p
                  class="mb-2 font-weight-bold"
                  :class="
                    $vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'
                  "
                >
                  Influencer Questions
                </p>
                <v-divider class="mb-12"></v-divider>
                <p class="display-1 mb-2">
                  <strong>Hi {{ user ? user.firstname : "" }},</strong>
                </p>
                <p class="text-h5">
                  Your account (<span class="primary--text"
                    >@{{ user ? user.username : "" }}</span
                  >) is about to be upgraded to an influencer. In order to
                  proceed, we will need to ask you some questions. These
                  questions will be used to build your online persona as a Lugah
                  influencer.
                </p>
                <v-card-actions>
                  <v-btn
                    class="text-capitalize primary px-4"
                    @click="beginQuestions"
                    rounded
                    large
                    >Proceed to answer questions
                    <v-icon>mdi-arrow-right</v-icon></v-btn
                  >
                </v-card-actions>
              </v-card>
            </div>
          </v-scroll-y-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "users/user",
      isLoggedIn: "users/isLoggedIn",
    }),
  },
  methods: {
    ...mapActions({
      getQuestions: "questions/getQuestions",
    }),
    async beginQuestions() {
      console.log("Get Questions");
      const result = await this.getQuestions();
      if (result.success) {
        this.$router.push({ name: "Questions" }).catch((e) => {
          console.log({ e });
        });
      }
    },
  },
};
</script>

<style>
</style>
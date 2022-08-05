<template>
  <div class="submission-complete">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-scroll-x-transition>
            <v-card elevation="0" class="my-16 py-4">
              <p
                class="mb-2 font-weight-bold success--text"
                :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
              >
                Submission Successful
              </p>
              <v-divider class="mb-12"></v-divider>
              <!-- <p class="display-1 mb-2">
                <strong>Hi {{ user ? user.firstname : "" }},</strong>
              </p> -->
              <p class="text-h5">
                Thank you for your submission. Our team will forward next steps
                to your registered email and your plan will be upgraded shortly.
                <br />
                <br />
                Thanks.
                <br />
                <br />

                You will be automatically redirected back to the app.
                <br />
                If that doesn't happen
                <span class="primary--text">Click here.</span>
              </p>
              <p>You will be signed out in {{ timer }}...</p>
              <v-card-actions>
                <!-- <v-btn
                  class="text-capitalize primary px-4"
                  @click="beginQuestions"
                  rounded
                  large
                  >Proceed to answer questions
                  <v-icon>mdi-arrow-right</v-icon></v-btn
                > -->
              </v-card-actions>
            </v-card>
          </v-scroll-x-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      timer: 20,
      interval: null,
    };
  },
  computed: {
    ...mapGetters({
      user: "users/user",
      isLoggedIn: "users/isLoggedIn",
    }),
  },
  methods: {
    ...mapActions({
      logout: "users/logout",
    }),
    async signout() {
      if (this.interval) {
        clearInterval(this.interval);
      }
      await this.logout();
      this.$router.push({ name: "Home" }).catch((e) => {
        console.log({ e });
      });
    },
    async countdown() {
      this.timer--;
      if (this.timer < 1) {
        await this.signout();
      }
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.countdown();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style>
</style>
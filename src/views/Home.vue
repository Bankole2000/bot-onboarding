<template>
  <div class="home">
    <HomePageContent />
    <!-- <QuestionItem /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <loginModal ref="loginModal" @loginSuccess="loginSuccess" />
    <invalidTokenModal
      ref="invalidTokenModal"
      @retryToken="retryToken"
      @attemptLogin="attemptLogin"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import LoginModal from "../components/modals/LoginModal.vue";
// import QuestionItem from "../components/blocks/QuestionItem.vue";
import API from "@/api";
import { mapActions, mapGetters } from "vuex";
import InvalidTokenModal from "../components/modals/InvalidTokenModal.vue";
import HomePageContent from "../components/blocks/HomePageContent.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    LoginModal,
    // QuestionItem,
    InvalidTokenModal,
    HomePageContent,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "users/isLoggedIn",
    }),
  },
  methods: {
    ...mapActions({
      showGlobalLoader: "ui/showGlobalLoader",
      showToast: "ui/showToast",
      setAuthData: "users/setAuthData",
    }),
    showModal(ref, value) {
      this.$refs[ref].show(value);
    },
    loginSuccess() {
      console.log("Login Successful");
      this.showModal("loginModal", false);
    },
    async authenticateWithToken() {
      this.showGlobalLoader({ show: true, message: "Loading..." });
      // console.log({ query: this.$route.query });
      const { token } = this.$route.query;
      // console.log({ token });
      try {
        const { data: result } = await API.Auth.validateToken(token);
        if (result.success) {
          // Update User and Token in vuex;
          // console.log({ data: result.data });
          await this.setAuthData({ user: result.data, token });
          this.showToast({
            show: true,
            message: "Authentication Successful",
            sclass: "success",
            timeout: 3000,
          });
        }
      } catch (error) {
        console.log({ error });
        this.showToast({
          show: true,
          message: "Invalid Token",
          sclass: "error",
          timeout: 3500,
        });
        this.showModal("invalidTokenModal", true);
      } finally {
        this.showGlobalLoader({ show: false, message: "" });
      }
    },
    attemptLogin() {
      this.showModal("invalidTokenModal", false);
      this.showModal("loginModal", true);
    },
    async retryToken() {
      this.showModal("invalidTokenModal", false);
      await this.authenticateWithToken();
    },
  },
  async mounted() {
    const { token } = this.$route.query;
    if (token) {
      await this.authenticateWithToken();
      return;
    }
    if (!this.isLoggedIn) {
      this.showModal("loginModal", true);
    }
  },
};
</script>

<template>
  <div class="login-modal">
    <v-dialog persistent v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline primary white--text d-flex align-center"
          ><v-icon color="white" class="mr-2">mdi-login-variant</v-icon>
          <p class="mb-0">Login</p></v-card-title
        >
        <v-divider></v-divider>
        <v-card-text class="py-4 px-6">
          <p>
            Login to your Lugah Entertainment account to begin your influencer
            digital assistant application.
          </p>
          <v-text-field
            label="Email"
            type="text"
            v-model="email"
            @keypress.enter="login"
            :readonly="loading"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            @keypress.enter="login"
            :readonly="loading"
            v-model="password"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="primary"
            class="pl-6 pr-4"
            @click="login"
          >
            Login <v-icon>mdi-chevron-double-right</v-icon>
          </v-btn>
        </v-card-actions>
        <v-overlay :value="loading" absolute>
          <v-progress-circular
            color="primary"
            indeterminate
            size="64"
          ></v-progress-circular>
        </v-overlay>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import API from "@/api";
export default {
  data() {
    return {
      dialog: false,
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions({
      showToast: "ui/showToast",
      loginWithEmail: "users/loginWithEmail",
      showGlobalLoader: "ui/showGlobalLoader",
    }),
    async login() {
      this.loading = true;
      const { email, password } = this.$data;
      // console.log({ email, password });
      if (!email || !password) {
        this.showToast({
          show: true,
          message: "Invalid Email or Password",
          sclass: "error",
          timeout: 3000,
        });
        this.loading = false;
        return;
      }
      const result = await this.loginWithEmail({ email, password });
      result.success ? this.$emit("loginSuccess") : null;
      this.loading = false;
    },
    show(value) {
      this.dialog = value;
    },
  },
};
</script>

<style>
</style>
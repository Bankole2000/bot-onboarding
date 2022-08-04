<template>
  <div class="invalid-token-modal">
    <v-dialog persistent v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="headline error white--text d-flex align-center"
          ><v-icon color="warning" class="mr-2">mdi-alert</v-icon>
          <p class="mb-0">Invalid Token</p></v-card-title
        >

        <v-card-text class="py-4 px-6">
          The token or link you have entered is either
          <strong>invalid</strong> or <strong>expired</strong>. Please try again
          or login to your account.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            class="text-capitalize"
            text
            @click="$emit('retryToken')"
            ><v-icon>mdi-restart</v-icon> Retry
          </v-btn>

          <v-btn
            color="primary"
            class="text-capitalize px-4"
            @click="$emit('attemptLogin')"
            ><v-icon left>mdi-login-variant</v-icon> Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    show(value) {
      this.dialog = value;
    },
  },
};
</script>

<style>
</style>
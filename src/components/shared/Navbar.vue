<template>
  <div class="navbar">
    <v-app-bar
      dark
      color="transparent"
      app
      elevation="1"
      height="90"
      class="py-0 ma-0"
    >
      <div
        style="
          position: relative;
          display: flex;
          align-items: center;

          width: 100%;
          height: 90px;
        "
        class="py-0"
      >
        <div
          style="
            position: absolute;
            left: 0;
            background-color: rgba(255, 255, 255, 0.5);
            top: 0;
            height: 100%;
            width: 100%;
            backdrop-filter: blur(5px);
          "
          class="py-10"
        ></div>

        <v-container style="height: 100%" v-if="!$vuetify.breakpoint.smAndDown">
          <v-row align="center" style="height: 90px" class="py-4">
            <v-toolbar-title class="d-flex align-center">
              <v-img
                :src="require('@/assets/logo.svg')"
                width="50"
                contain
                @click="$router.push({ name: 'Home' })"
                class="ml-2 pl-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary lighten-2"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-btn
                text
                :to="{ name: 'Home' }"
                class="mb-0 text-h6 font-weight-light"
                color="primary"
              >
                Lugah Bot Onboarding
              </v-btn>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div v-if="!isLoggedIn">
              <v-btn
                large
                rounded
                outlined
                :to="{ name: 'Home' }"
                color="primary"
                class="font-weight-light mx-1 text-h6 text-capitalize"
                >Login <v-icon right>mdi-account-circle-outline</v-icon></v-btn
              >
            </div>
            <div v-else class="d-flex align-center">
              <div style="z-index: 999" class="mr-4" v-if="user">
                <p class="mb-0 primary--text text-right font-weight-bold">
                  @{{ user.username }}
                </p>
                <p class="mb-0 grey--text">{{ user.email }}</p>
              </div>
              <v-avatar size="50" color="primary" v-if="user">
                <img
                  :src="`${baseUrl}/api/v1/profile/u/image/${user.username}`"
                  :alt="user.username"
                />
              </v-avatar>
            </div>
          </v-row>
        </v-container>
        <v-container v-else style="height: 100%">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              position: relative;
              margin-top: 15px;
            "
          >
            <v-avatar size="50" color="primary" v-if="user">
              <img
                :src="`${baseUrl}/api/v1/profile/u/image/${user.username}`"
                :alt="user.username"
              />
            </v-avatar>

            <div style="width: 100%; justify-content: center">
              <v-img
                :src="require('@/assets/logo.svg')"
                width="50"
                @click="$router.push({ name: 'Home' })"
                contain
                class="mx-auto pl-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary lighten-2"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
          </div>
        </v-container>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { env } from "@/utils/config";

export default {
  data() {
    return {
      baseUrl: env.baseUrl,
    };
  },
  computed: {
    ...mapGetters({
      user: "users/user",
      isLoggedIn: "users/isLoggedIn",
    }),
  },
};
</script>

<style>
</style>
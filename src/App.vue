<template>
  <v-app>
    <app-bar-core-vue />
    <v-main>
      <router-view />
    </v-main>
    <login-vue />
  </v-app>
</template>

<script>
import AppBarCoreVue from "./components/Core/AppBarCore.vue";
import LoginVue from "./components/Login.vue";

export default {
  name: "App",
  components: {
    AppBarCoreVue,
    LoginVue,
  },
  data: () => ({
    //
  }),
  methods: {
    async checkIfHaveUser() {
      if (this.$route.query) {
        const payload = this.$route.query;
        await this.$store.dispatch("checkUserSesstion", payload);
      }
    },
  },
  async mounted() {
    await this.checkIfHaveUser();
  },
  beforeCreate() {
    const uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
    }
  },
};
</script>

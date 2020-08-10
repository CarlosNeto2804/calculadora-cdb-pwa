<template>
  <v-app-bar app color="primary" dark>
    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }" class="mx-0 px-0 pr-4">
        <v-btn v-bind="attrs" v-on="on" outlined dark>
          {{buttonTitle}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-if="!isLogged" @click="commitOnVuex('changeLoginState')">
          <v-list-item-title >Entrar</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="isLogged" @click="commitOnVuex('loggout')">
          <v-list-item-title >Sair</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBarCore",
  data: () => ({}),
  computed: {
    isLogged() {
      return this.$store.getters["getUserLogged"];
    },
    buttonTitle() {
      return this.$store.getters["getUserName"] || "Menu";
    },
  },
  methods: {
    commitOnVuex(method){
      this.$store.commit(method);
    }
  },
};
</script>

<style scoped></style>

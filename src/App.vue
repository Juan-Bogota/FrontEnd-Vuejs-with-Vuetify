<template>
  <v-app id="inspire">
    <v-main class="grey lighten-2">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
  }),

  created() {
    this.$store.dispatch("autoLogin");
  },
};
</script>

<template>
  <div>
    <v-toolbar class="white">
      <img :src="imageLink.logo" alt="Vuetify.js" height="60px" />
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <p>Beta</p>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="white lighten-3" href="/login">Iniciar Session</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="green lighten-3" href="/landing">Landing Page</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="green lighten-3" href="/about">About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Paperless App",
      imageLink: {
        logo:
          "https://cdn.dribbble.com/users/381299/screenshots/5655677/dribbble.jpg",
      },
    };
  },
};
</script>
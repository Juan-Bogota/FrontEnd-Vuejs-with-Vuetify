<template>
  <div>
    <v-toolbar class="white">
      <img :src="imageLink.logo" alt="Vuetify.js" height="60px" />
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <p>Beta</p>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!this.$store.state.user">
        <v-btn class="white lighten-3" :to="{ name: 'Login' }">Iniciar Sesion</v-btn>
      </v-toolbar-items>
       <v-toolbar-items v-else>
        <v-btn class="white lighten-3" @click="salir()">Cerrar Sesion</v-btn>
        <v-btn class="white lighten-3" :to="{ name: 'AuthHome' }">Gestion</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="green lighten-3" :to="{ name: 'Home' }">Home</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="green lighten-3" :to="{ name: 'About' }">About</v-btn>
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
   methods: {
    salir() {
      this.$store.dispatch("salir");
    },
   }
};
</script>
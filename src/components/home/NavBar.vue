<template>
  <div>
    <v-app-bar app color="teal darken-1" dense dark>
        <span class="hidden-sm-and-up"><v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon></span>
      
        <v-img :src="imageLink.logo" alt="Vuetify.js" max-height="50"  max-width="60"></v-img>
      <v-toolbar-title>Papperless</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
          <v-btn
            flat
            v-for="(item, i) in items"
            :key="i"
            :to="{ name: item.ruta }"
            exact
          ><v-icon v-text="item.icon"></v-icon>
          {{item.text}}
          </v-btn>
            <v-toolbar-items v-if="this.$store.state.user">
                <v-btn :to="{name: 'AuthHome'}"><v-icon v-text="'mdi-apple-keyboard-command'"></v-icon>Gestion</v-btn>
                <v-btn class="red" @click="salir()"><v-icon v-text="'mdi-logout'"></v-icon>Salir</v-btn>
            </v-toolbar-items>
            <v-toolbar-items v-else>
                <v-btn class="green"  :to="{name:'Login'}">Login</v-btn>
            </v-toolbar-items>
              
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary color="cyan lighten-5">
      
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="{ name: item.ruta }"
            exact
          >
                <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="this.$store.state.user" :to="{name: 'AuthHome'}">
                <v-list-item-icon>
                    <v-icon >mdi-apple-keyboard-command</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="'Gestion'"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="this.$store.state.user" @click="salir()">
                <v-list-item-icon>
                    <v-icon >mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="'Logout'"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-else :to="{name: 'Login'}">
                <v-list-item-icon>
                    <v-icon >mdi-login</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="'Login'"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBarTwo",
  data: () => {
    return {
      drawer: null,
      //url: "http://localhost:3000/",
      url:"https://warm-waters-11328.herokuapp.com/",
      selectedItem: 0,
      items: [
        { text: "Home", icon: "mdi-home", ruta: "Home" },
        {
          text: "About", 
          icon: "mdi-book-open-page-variant",
          ruta: "About",
        },
       
      ],
      itemsDefault: [],
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
  },
};
</script>
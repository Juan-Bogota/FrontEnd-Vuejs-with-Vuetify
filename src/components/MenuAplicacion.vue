<template>
  <div>
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://placeimg.com/240/240/people"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> John Leider </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: null,
      selectedItem: 0,
      items: [
        { text: "Home", icon: "mdi-home", ruta: "Home" },
        { text: "Categoria", icon: "mdi-shape", ruta: "Categoria" },
        { text: "Articulo", icon: "mdi-tag-heart-outline", ruta: "Articulo" },
        { text: "Usuario", icon: "mdi-account-multiple", ruta: "Usuario" },
        {
          text: "Landing Page",
          icon: "mdi-book-open-page-variant",
          ruta: "Landing",
        },

        //{ text: "Logout", icon: "mdi-check-circle", ruta: "" },
      ],
    };
  },
};
</script>
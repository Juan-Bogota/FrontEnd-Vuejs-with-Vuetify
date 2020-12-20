<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed elevation="2" large rounded text @click="salir()"
        ><v-icon>mdi-logout</v-icon><span>LogOut</span></v-btn
      >
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
            <v-list-item-title class="title">
              {{ usuario.nombre }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ usuario.email }}</v-list-item-subtitle>
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
            v-for="(item, i) in itemsDefault"
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
  name: "MenuAplicacion",
  data: () => {
    return {
      drawer: null,
      url: "http://localhost:3000/",
      //url: "https://warm-waters-11328.herokuapp.com/",
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
      itemsDefault: [],
      usuario: {},
      user: {},
    };
  },
  created() {
    this.validateItems();
    this.cliente();
  },
  methods: {
    salir() {
      this.$store.dispatch("salir");
    },

    validateItems() {
      console.log(this.$store.state.user);
      if (this.$store.state.user.rol !== "Administrador") {
        this.items.splice(3, 1);
      }
      this.itemsDefault = this.items;
      return this.itemsDefault;
    },

    cliente() {
      //this.user = Object.assign({}, this.$store.state.user);
      axios
        .get(`${this.url}api/usuario/cliente`, {
          params: {
            id: this.$store.state.user.id,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.usuario = response.data[0];
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
};
</script>
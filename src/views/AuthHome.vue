<template>
  <div>
    <v-card
      class="mx-auto mb-5"
      max-width="344"
      outlined
      v-for="(item, i) in infoDefault"
      :key="i"
      :to="{ name: item.link }"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ item.nombre }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.descripcion }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar size="80" :color="item.color">
          <v-icon dark>
            {{ item.icon }}
          </v-icon></v-list-item-avatar
        >
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text>
          Ingresar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AuthHome",
  data: function() {
    return {
      title: "Paperless App",
      info: [
        {
          nombre: "Categoria",
          descripcion: "Administra y crea categorias",
          link: "Categoria",
          icon: "mdi-shape",
          color: "black",
        },
        {
          nombre: "Articulo",
          descripcion: "Administra y crea tus Articulos",
          link: "Articulo",
          icon: "mdi-tag-heart-outline",
          color: "blue",
        },
        {
          nombre: "Usuarios",
          descripcion: "Administra y crea Usuarios",
          link: "Usuario",
          icon: "mdi-account-multiple",
          color: "red",
        },
      ],
      infoDefault: [],
    };
  },
  created() {
    this.validateItems();
  },
  methods: {
    validateItems() {
      console.log(this.$store.state.user);
      if (this.$store.state.user.rol !== "Administrador") {
        this.info.splice(2, 1);
      }
      this.infoDefault = this.info;
      return this.infoDefault;
    },
  },
};
</script>

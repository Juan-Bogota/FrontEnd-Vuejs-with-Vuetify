<template>
  <v-data-table
    :headers="headers"
    :items="articulos"
    sort-by="nombre"
    class="elevation-1"
    :loading="cargando"
    loading-text="Cargando Articulos"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>ARTICULOS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Nuevo Articulo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre Articulo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.codigo"
                      label="Codigo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="editedItem.precio_venta"
                      label="Precio"
                      value="10"
                      prefix="$"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      v-model="categoria"
                      label="Categoria"
                      :items="categorias"
                      item-text="nombre"
                      item-value="id"
                      return-object
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripción"
                      counter="400"
                      no-resize
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Desea cambiar el estado?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>

      <v-icon medium @click="deleteItem(item)">
        <template v-if="item.estado"> mdi-toggle-switch </template>
        <template v-else> mdi-toggle-switch-off-outline </template>
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  name: "TableArticulo",
  data: () => ({
    //url: "http://localhost:3000/",
    url:"https://warm-waters-11328.herokuapp.com/",
    dialog: false,
    dialogDelete: false,
    cargando: true,
    headers: [
      {
        text: "Nombre Articulo",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Categoria", value: "categoria.nombre" },
      { text: "Codigo", value: "codigo" },
      { text: "Precio Venta", value: "precio_venta" },

      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    categorias: [],
    categoria: "",
    articulos: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
      descripcion: "",
      precio_venta: "",
      codigo: "",
      categoria: null,
      estado: 0,
    },
    defaultItem: {
      nombre: "",
      descripcion: "",
      precio_venta: "",
      codigo: "",
      categoria: null,
      estado: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Articulo" : "Editar Articulo";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
    this.categoriaList();
  },

  methods: {
    list() {
      axios
        .get(`${this.url}api/articulo/list`)
        .then((response) => {
          console.log(response.data);
          this.articulos = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    categoriaList() {
      axios
        .get(`${this.url}api/categoria/list`)
        .then((response) => {
          console.log(response.data);
          this.categorias = response.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    editItem(item) {
      this.editedIndex = item.id;
      this.categoria = item ? item.categoria : "";
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      if (!this.editedItem.estado) {
        axios
          .put(
            `${this.url}api/articulo/activate`,
            {
              id: this.editedItem.id,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      } else {
        axios
          .put(
            `${this.url}api/articulo/deactivate`,
            {
              id: this.editedItem.id,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      }

      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        axios
          .put(
            `${this.url}api/articulo/update`,
            {
              id: this.editedItem.id,
              categoria: this.categoria.id,
              nombre: this.editedItem.nombre,
              descripcion: this.editedItem.descripcion,
              precio_venta: this.editedItem.precio_venta,
              codigo: this.editedItem.codigo,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      } else {
        axios
          .post(
            `${this.url}api/articulo/add`,
            {
              categoriaId: this.categoria.id,
              nombre: this.editedItem.nombre,
              descripcion: this.editedItem.descripcion,
              precio_venta: this.editedItem.precio_venta,
              codigo: this.editedItem.codigo,
              estado: 1,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      }
      this.close();
    },
  },
};
</script>
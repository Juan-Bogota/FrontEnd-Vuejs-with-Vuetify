<template>
  <div>
    <section>
      <v-app id="inspire">
        <v-container>
          <v-row>
            <h1>Nuestros Servicios</h1>
            <template v-for="(categoria, n) in categorias">
              <v-col
                v-if="categoria.estado === 1"
                :key="n"
                class="mt-2"
                cols="12"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <h2>
                      <b>{{ categoria.nombre }}</b>
                    </h2>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ categoria.descripcion }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-col>

              <template v-for="(articulo, j) in articulos" md="2">
                <v-col
                  v-if="
                    articulo.categoriaId === categoria.id &&
                    articulo.estado === 1
                  "
                  :key="`${n}${j}`"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card class="mx-auto" max-width="344">
                    <v-img :src="articulo.imagen" height="200px"></v-img>

                    <v-card-title>
                      <b>{{ articulo.nombre }}</b>
                    </v-card-title>

                    <v-card-subtitle>
                      {{ articulo.descripcion }}
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn color="orange lighten-2" text> Mas Info </v-btn>

                      <v-spacer></v-spacer>
                      <!--
                          <v-btn icon @click="show = !show">
                            <v-icon>{{
                              show ? "mdi-chevron-up" : "mdi-chevron-down"
                            }}</v-icon>
                          </v-btn> -->
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                          {{ articulo.descripcion }}
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-container>
      </v-app>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",

  components: {},
  data: function () {
    return {
      drawer: null,
      show: false,
      //url: "http://localhost:3000/",
      url:"https://warm-waters-11328.herokuapp.com/",
      title: "Paperless App",
      imageLink: {
        sub_main:
          "https://dwdqz3611m4qq.cloudfront.net/meta-images/save-money-go-paperless-795x450.jpg?mtime=20190720221650&focal=none",
        logo:
          "https://cdn.dribbble.com/users/381299/screenshots/5655677/dribbble.jpg",
      },
      
      categorias: [],
      articulos: [],
    };
  },
  created() {
    this.categoria();
    this.articulo();
  },

  methods: {
    categoria() {
      axios
        .get(`${this.url}api/categoria/list`,
           {
              headers: {
                token: this.$store.state.token,
              },
           }
        )
        .then((response) => {
          console.log(response.data);

          this.categorias = response.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    articulo() {
      axios
        .get(`${this.url}api/articulo/list`)
        .then((response) => {
          console.log(response.data);

          this.articulos = response.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
};
</script>

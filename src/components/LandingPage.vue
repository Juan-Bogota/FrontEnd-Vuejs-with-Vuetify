<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-side-icon
        ><img :src="imageLink.logo" alt="Vuetify.js" height="60px"
      /></v-toolbar-side-icon>
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <p>Beta</p>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="green lighten-3" href="/home">Sign In</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax :src="imageLink.sub_main" style="opacity: 0.7">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              Sea parte de la transformacion digital
            </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              Puedes encontrar tus archivos con solo hacer clic en un botón.
            </div>
            <v-btn class="blue lighten-2 mt-5" dark large href="/home">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Beneficios de dejar de usar papel</h2>
              <span class="subheading">
                No mas restricciones, no mas limitaciones
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >Ahorra tiempo
                      </v-icon>
                    </v-card-text>

                    <v-card-text>
                      El tiempo dedicado a archivar, organizar y buscar
                      documentos en papel es tiempo que podría dedicarse a
                      tareas más productivas. Los documentos digitalizados se
                      almacenan en un depósito central, que es básicamente un
                      archivador digital bien organizado donde se encuentran
                      todos sus documentos.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >Ahorra espacio</v-icon
                      >
                    </v-card-text>

                    <v-card-text>
                      El papel ocupa mucho espacio, al igual que los
                      archivadores y el espacio para almacenar esos
                      archivadores. La digitalización de archivos le permite
                      almacenar todos los documentos en un servidor local o en
                      la nube. Las carpetas de archivos digitales en un
                      repositorio requieren mucho menos espacio que un archivo
                      de registros físicos.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >Ahorra dinero</v-icon
                      >
                    </v-card-text>

                    <v-card-text>
                      La digitalización mejora la eficiencia del proceso y le
                      permite ahorrar dinero. Además, la digitalización reduce
                      el dinero gastado en papel, impresoras, tinta, franqueo,
                      espacio de oficina para archivos y tiempo de los empleados
                      para administrar el papeleo.</v-card-text
                    >
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="imageLink.main" height="380" dark>
          <v-layout column align-center justify-center>
            <div class="headline black--text mb-3 text-center h3">
              Papperlesss App es una red social que ayuda a tu empresa sea parte
              de la transformacion digital y sea visible ante el mundo.
            </div>
            <em class="black--text"
              >Con nuestro servicios y esasoria puedes lograr un cambio en tu
              estructura y lograr objetivo muchos mas ambiosos en tu empresa</em
            >
            <v-btn class="blue lighten-2 mt-5" dark large href="/home">
              Mas info
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 text-xs-center class="mt-5">
              <div class="headline">
                Estas interesado? Sea parte de esta comunidad!
              </div>
              <br />
              <div>
                Si desea ser uno de los primeros usuarios en Papperless App, le
                enviaremos un correo electronico, para que estes al tanto de
                nuestro servicios y como te puede ayudar en tu compañia
              </div>
            </v-flex>
            <v-flex xs8 offset-xs2>
              <v-card class="elevation-0 transparent">
                <v-card-text>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field
                      box
                      label="Email address"
                      :rules="emailRules"
                      v-model="email"
                      hint="Enter your email!"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field
                      box
                      multi-line
                      label="Envianos tus preguntas o comentarios"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                    <v-btn
                      class="blue lighten-2 mb-5"
                      dark
                      large
                      @click="subscribe"
                      >Enviar</v-btn
                    >
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large
                      >Bienvenido, espera nuestra respuesta!</v-btn
                    >
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-parallax :src="imageLink.social_cover" height="380">
          <v-layout justify-space-around justify-center>
            <v-icon x-large>mdi-facebook</v-icon>

            <v-icon x-large>mdi-twitter</v-icon>

            <v-icon x-large>mdi-instagram</v-icon>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Informacion</div>
                </v-card-title>
                <v-card-text>
                  No somos una compañia somos una comunidad que quiere acercarte
                  al mundo de la tecnologia digital
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Nuestro Objetivo</div>
                </v-card-title>
                <v-card-text>
                  Si buscas un proyecto visualmente atractivo que cumpla con las
                  expectativas y la de tus futuros clientes
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="container-fluid" id="team">
        <div class="row justify-content-center mb-5">
          <div class="col mt-5" v-for="(member, index) of team" :key="index">
            <team-card :member="member"></team-card>
          </div>
        </div>
      </section>
      <section>
        <v-container>
          <v-layout>
            <v-flex xs12 class="text-center">
              <img height="200px" :src="imageLink.logo" />
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="green darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12 class="text-center">
            <div class="white--text ml-3">
              Made with
              <a
                class="white--text"
                href="https://vuetifyjs.com"
                target="_blank"
                >Vuetify</a
              >
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import TeamCard from "./TeamCard.vue";
export default {
  name: "App",

  components: {
    TeamCard,
  },
  data: function () {
    return {
      title: "Paperless App",
      imageLink: {
        main: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
        sub_main:
          "https://dwdqz3611m4qq.cloudfront.net/meta-images/save-money-go-paperless-795x450.jpg?mtime=20190720221650&focal=none",
        logo:
          "https://cdn.dribbble.com/users/381299/screenshots/5655677/dribbble.jpg",
        social_cover:
          "https://www.mindinventory.com/blog/wp-content/uploads/2020/09/mobile-cloud-application.png",
      },
      team: [
        {
          codigo: 1,
          nombre: "Paola Hormaza",
          descripcion:
            'Contadora Publica de la Ciudad de Pasto, "La programación está inmersa en muchos ámbitos de la contabilidad una razón más para adquirir un nuevo conocimiento"',
          image: "img/paola.PNG",
          rol: "Desarrolladora FrontEnd",
        },
        {
          codigo: 2,
          nombre: "Kevin Figueroa",
          descripcion:
            "Estudiante de la Universidad Tecnológica de Bolívar, en la carrera de ingeniería de sistemas, 18 años, le gusta el mar, los atardeceres y disfruta de una buena película, se caracteriza por ser una persona calmada, paciente y responsable.",
          image: "img/kevin.PNG",
          rol: "Desarrollador FrontEnd",
        },
        {
          codigo: 3,
          nombre: "Christian Gonzales",
          descripcion:
            "Estudiante de Ingeniería de Sistemas en la UNAB, miembro de la Escuela Latinoamericana de Inteligencia Artificial. si lo puedes imaginar lo puedes programar..",
          image: "img/cristian.PNG",
          rol: "Desarrollador BackEnd",
        },
        {
          codigo: 4,
          nombre: "Juan Lopez",
          descripcion:
            "Soy ingeniero Aeronautico, me gusta mucho programacion especialmente en Arduino, y mi hobbie es jugar ajedrez y montar bicicleta",
          image: "img/juan.jpg",
          rol: "Desarrollador BackEnd",
        },
        {
          codigo: 5,
          nombre: "Camilo Ramirez",
          descripcion:
            " Ingeniero en electrónica de la Universidad del Quindio, tengo 25 años, soy de Armenia, Quindio y me gusta practicar deportes y pasear.",
          image: "img/camilo.PNG",
          rol: "Desarrollador BackEnd",
        },
      ],
      email: "",
      emailRules: [
        (v) => {
          return !!v || "E-mail is required";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      subscribed: false,
    };
  },
  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    },
  },

  computed: {
    imgHeight: function () {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    },
  },

  mounted: function () {
    this.calculateHeight();
  },
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>

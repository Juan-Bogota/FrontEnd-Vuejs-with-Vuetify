<template>
  <v-layout>
    <v-flex>
      <v-row>
        <v-col>
          <v-card class="px-5 py-5" elevation="14" light rounded>
            <v-card-title> Formulario Login </v-card-title>

            <v-form ref="form" lazy-validation>
              <v-card-text>
                <v-text-field
                  v-model="login.email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="login.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  label="Contraseña"
                  hint="Minimo 6 caracteres"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  :disabled="!(this.login.email && this.login.password)"
                  color="success"
                  class="mr-4"
                  @click="loginUser"
                >
                  Login
                </v-btn>
                <v-btn
                  color="blue"
                  class="mr-4"
                  href="/"
                >
                  Home
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";
import axios from "axios";
export default {
  data() {
    return {
      //url: "http://localhost:3000/",
      url:"https://warm-waters-11328.herokuapp.com/",
      login: {
        email: "",
        password: "",
      },
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 6 || "Minimo 6 Caracteres",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  beforeCreated() {
    this.$store.dispatch("autoLogin")
      ? this.$router.push({ path: "/auth/home" })
      : false;
  },
  methods: {
    async loginUser() {
      axios
        .post(`${this.url}api/usuario/login`, this.login)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch("guardarToken", data.tokenReturn);
          this.$router.push("/auth/home");
          swal("Login Correct", `Los datos estan ok usuario`, "success");
          console.log(data);
        })
        .catch((error) => {
          swal("Login Incorrect", "Datos erroneos", "error");
          console.log(error);
          return error;
        });
    },
  },
};
</script>

<style scoped>
</style>
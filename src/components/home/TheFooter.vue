<template>
  <div>
    <section>
      <v-container>
        <v-layout>
          <v-flex xs12 class="text-center">
            <img height="200px" :src="imageLink.logo" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Papperless</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Desarrolo Web Mintic</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data: function () {
    return {
      title: "Paperless App",
      imageLink: {
        sub_main:
          "https://dwdqz3611m4qq.cloudfront.net/meta-images/save-money-go-paperless-795x450.jpg?mtime=20190720221650&focal=none",
        logo:
          "https://cdn.dribbble.com/users/381299/screenshots/5655677/dribbble.jpg",
      },
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
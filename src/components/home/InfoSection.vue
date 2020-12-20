<template>
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
        <v-btn class="blue lighten-2 mt-5" dark large href="/">
          Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>


<script>
export default {
  data: function () {
    return {
      title: "Paperless App",
      imageLink: {
        sub_main:
          "https://dwdqz3611m4qq.cloudfront.net/meta-images/save-money-go-paperless-795x450.jpg?mtime=20190720221650&focal=none",
        logo:
          "https://cdn.dribbble.com/users/381299/screenshots/5655677/dribbble.jpg",
      },
    };
  },
};
</script>
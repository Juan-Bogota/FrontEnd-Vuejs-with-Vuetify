<template>
  <v-app light>
    <v-main>
      <NavBar />
      <InfoSection />
      <CategoriaArticulo />
      
      <NewsApi />
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import CategoriaArticulo from "../components/home/CategoriaArticulo";
import NavBar from "../components/home/NavBar";
import InfoSection from "../components/home/InfoSection";
import MenuAplicacion from "../components/MenuAplicacion";
import TheFooter from "../components/home/TheFooter";
import NewsApi from "../components/home/NewsApi";


export default {
  name: "Home",
  components: {
    CategoriaArticulo,
    MenuAplicacion,
    NavBar,
    InfoSection,
    TheFooter,
    NewsApi,
  },
};
</script>

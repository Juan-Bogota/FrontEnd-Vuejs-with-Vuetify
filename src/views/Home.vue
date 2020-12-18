<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" /> -->
    <MenuAplicacion />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MenuAplicacion from "../components/MenuAplicacion";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MenuAplicacion,
  },
};
</script>

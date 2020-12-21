<template>
  <div>
    
    <menu-aplicacion></menu-aplicacion>
 
  
    <router-view />
  </div>
</template>

<script>
import MenuAplicacion from "../components/MenuAplicacion";

export default {
  components: { MenuAplicacion },
};
</script>
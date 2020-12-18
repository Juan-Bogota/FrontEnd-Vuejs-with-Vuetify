<template>
  <div>
    <MenuAplicacion />
    <TableArticulo></TableArticulo>
  </div>
</template>

<script>
import TableArticulo from "../components/TableArticulo";
import MenuAplicacion from "../components/MenuAplicacion";

export default {
  components: {
    TableArticulo,
    MenuAplicacion,
  },
};
</script>

<template>
  <div>
    <MenuAplicacion />
    <TableCategoria></TableCategoria>
  </div>
</template>

<script>
import TableCategoria from "../components/TableCategoria";
import MenuAplicacion from "../components/MenuAplicacion";

export default {
  components: {
    TableCategoria,
    MenuAplicacion,
  },
};
</script>

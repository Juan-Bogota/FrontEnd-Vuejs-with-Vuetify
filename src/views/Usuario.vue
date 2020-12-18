<template>
  <div>
    <MenuAplicacion />
    <TableUsuarios></TableUsuarios>
  </div>
</template>

<script>
import TableUsuarios from "../components/TableUsuarios";
import MenuAplicacion from "../components/MenuAplicacion";
export default {
  components: {
    TableUsuarios,
    MenuAplicacion,
  },
};
</script>

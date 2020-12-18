<template>
  <div class="card text-white bg-dark">
    <div class="d-flex justify-content-center p-2">
      <span class="text-aling: center">
        <img
          v-bind:src="member.image"
          :alt="member.nombre"
          class="img-fluid img-thumbnail"
        />
      </span>
    </div>
    <div class="card-body">
      <h4 class="card-title">
        {{ member.nombre }}
      </h4>
      <p>
        <span class="text-danger"> Cod: {{ member.codigo }}</span>
      </p>
      <h5>
        <b>Rol:</b> <span class="text-info">{{ member.rol }}</span>
      </h5>
      <p class="card-text font-italic">
        {{ member.descripcion }}
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSection",
  props: {
    member: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

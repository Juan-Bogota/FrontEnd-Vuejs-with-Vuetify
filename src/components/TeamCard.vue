<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-card max-width="300" class="mx-auto">
          <v-container>
            <v-row dense>
              
              <v-col>

                <v-card :color= "'black'" dark>
                      <v-img :src="member.image" height="200"></v-img>

                      <v-card-title class="headline">{{member.nombre}}</v-card-title>
                      <v-card-subtitle class="red--text">Codigo: {{member.codigo}}</v-card-subtitle>
                      <v-card-subtitle>{{member.descripcion}}</v-card-subtitle>
                      <v-card-subtitle class="blue--text"><b>Rol: {{member.rol}}</b></v-card-subtitle>
                  
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template><script>
export default {
  name: "HelloWorld",
  props: {
    member: Object
  },
  data: () => ({
   
  }),
};
</script>
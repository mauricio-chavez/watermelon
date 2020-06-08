<template>
  <layout>
    <div v-if="isAuthenticated" class="container profile">
      <vs-avatar size="100px" :src="user.photoURL" :alt="user.displayName" />
      <h2>{{ user.displayName }}</h2>
    </div>
    <div v-else class="container welcome">
      <h1>¡Hola!</h1>
      <p>Comienza a tomar tus notas con Watermelon</p>
      <vs-button @click="login" color="dark" type="gradient">Iniciar Sesión</vs-button>
    </div>
  </layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Layout from "../components/Layout.vue";
export default {
  name: "Home",
  components: { Layout },
  computed: mapGetters(["isAuthenticated", "user"]),
  methods: mapActions(["login"])
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome {
  margin-top: 15vh;
}

.welcome p {
  margin-bottom: 20px;
}

.profile {
  margin-top: 5vh;
}
</style>
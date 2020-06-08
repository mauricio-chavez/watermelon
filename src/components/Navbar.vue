<template>
  <vs-navbar>
    <div slot="title">
      <vs-navbar-title>
        <router-link to="/" class="brand">
          <img src="../assets/watermelon.png" alt="Watermelon" height="25" />
          <span>Watermelon</span>
        </router-link>
      </vs-navbar-title>
    </div>

    <template v-if="isAuthenticated">
      <vs-navbar-item>
        <a>Añadir Nota</a>
      </vs-navbar-item>
      <vs-navbar-item>
        <a>Ver Perfil</a>
      </vs-navbar-item>
      <vs-navbar-item>
        <a @click="logout">Cerrar Sesión</a>
      </vs-navbar-item>
    </template>

    <vs-navbar-item v-else>
      <a @click="login">Iniciar sesión con Google</a>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: mapGetters(["isAuthenticated", "user"]),
  methods: mapActions(["login", "logout"])
};
</script>

<style scoped>
.brand {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand img {
  margin-right: 5px;
}

.brand span {
  color: #000;
}

.brand span:hover {
  color: #333;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}

a:hover {
  cursor: pointer;
}
</style>
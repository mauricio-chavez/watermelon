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

    <vs-navbar-item index="0">
      <router-link to="/login">Iniciar sesión</router-link>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  name: "Navbar"
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
</style>
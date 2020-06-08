<template>
  <div>
    <navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Layout",
  components: { Navbar }
};
</script>

<style scoped>
nav {
  margin-bottom: 15px;
}

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
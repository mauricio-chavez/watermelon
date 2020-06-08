<template>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: mapGetters(["isLoading"]),
  watch: {
    isLoading: function(loading) {
      if (loading) {
        this.$vs.loading();
      } else {
        this.$vs.loading.close();
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

html,
body {
  font-family: "Poppins", sans-serif;
}
</style>

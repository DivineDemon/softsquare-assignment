<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
};
</script>

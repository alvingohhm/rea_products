<template>
  <div>
    <Navbar />
    <main class="container d-flex">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  mounted() {
    this.$store.commit("loadCart");
  },
};
</script>

<style scoped>
main {
  margin-top: 80px;
}
</style>

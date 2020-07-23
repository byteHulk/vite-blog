<template>
  <div>
    <Avatar msg="Hello Vite" />
    <Navbar />
    <router-view />
    <v-Footer />
  </div>
</template>

<script>
import Avatar from "../components/Avatar.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Avatar,
    Navbar,
    'v-Footer':Footer
  }
};
</script>

<style>
</style>
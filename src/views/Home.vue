<template>
  <div>
    <Avatar msg="Hello Vite" />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Avatar from "../components/Avatar.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Avatar,
    Navbar
  }
};
</script>

<style>
</style>
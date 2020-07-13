<template>
  <div>
    <div class="avatar-border">
      <div class="avatar"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.avatar-border {
  position: relative;
  width: 34.13333333vw;
  height: 34.13333333vw;
  max-width: 256px;
  max-height: 256px;
  margin: 0 auto;
}
.avatar {
  background-image: url(http://39.96.48.33/resource/avatar1.png);
  border-radius: 9999px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 0 10%;
}
</style>
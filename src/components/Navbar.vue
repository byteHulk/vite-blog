<template>
  <nav class="nav">
      <ul class="flex">
          <router-link tag="li" to="/article">
              <div class="nav-wei">文章</div>
              <div class="nav-wei letter">ARTICLE</div>
          </router-link>
          <router-link tag="li" to="/">
              <div class="nav-wei mainten">阅读</div>
              <div class="nav-wei letter">REDDING</div>
          </router-link>
          <router-link tag="li" to="/">
              <div class="nav-wei mainten">关于</div>
              <div class="nav-wei letter">ABOUT</div>
          </router-link>
          <router-link tag="li" to="/work">
              <div class="nav-wei">作品</div>
              <div class="nav-wei letter">WORK</div>
          </router-link>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    width: 80vw;
    max-width: 580px;
    margin: 4rem auto;
}a {
    color: #757575;
    display: block;
}
.mainten {
    text-decoration: line-through;
}
.flex{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.nav-wei {
    font-weight: 400;
}
.letter {
    font-size: .65rem;
}
.active {
    color: #12191f;
}
</style>
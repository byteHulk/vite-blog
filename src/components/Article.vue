<template>
  <section>
    <div>
      <h1 class="art-title">featured</h1>
      <ul class="art-list">
        <li class="art-file" v-for="item in keysData.featured" :key="item" @click="navTo(item)">
          {{item.name}}
          <span class="art-date">({{new Date(item.ctime).toLocaleString('en-US',{month: "short",day: "numeric",year: "numeric"})}})</span>
        </li>
      </ul>
    </div>
    <div>
      <h1 class="art-title">notes</h1>
      <ul class="art-list">
        <li class="art-file" v-for="item in keysData.notes" :key="item" @click="navTo(item)">
            {{item.name}}
          <span class="art-date">({{new Date(item.ctime).toLocaleString('en-US',{month: "short",day: "numeric",year: "numeric"})}})</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    keysData: {},
    keysTitle: []
  }),
  mounted() {
    axios.get("http://39.96.48.33/write/keys.json").then(res => {
      this.keysData = res.data;
    })
  },
  methods:{
      navTo(row){
          this.$router.push({path: `content/${this.encode(row.id)}`})
      },
      encode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    },
  }
};
</script>

<style scoped>
.art-title {
  text-transform: capitalize;
  font-size: 1.3rem;
}
.art-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  min-height: 23rem;
}
.art-file {
  font-size: 0.9rem;
  cursor: pointer;
  margin: 0.5rem;
}
.art-date {
  font-size: 0.8rem;
  color: #8a8a8a;
}
.art-file:hover {
  color: #000;
  text-decoration: underline;
}
</style>
<template>
  <div class="show-wrapper">
    <div>
      <hgroup class="show-hgroup">
        <h1 class="show-h1">{{artData.name}}</h1>
        <h5 class="show-h2">{{ctime}}</h5>
      </hgroup>
      <content class="text-content" v-html="artData.data"></content>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  data: () => ({
    artData: {},
    ctime: "",
  }),
  components: {
    Footer,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let id = this.decode(this.$route.params.id);
      let i = id.lastIndexOf("_");
      let name = id.substring(0, i);

      axios.get(`http://39.96.48.33/write/${name}.json`).then((res) => {
        this.artData = res.data[id];
      });
      axios.get(`http://39.96.48.33/write/keys.json`).then((res) => {
        let date = res.data[name].find((e) => e.id === id).ctime;
        this.ctime = new Date(date).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      });
    },
    decode(str) {
      // Going backwards: from bytestream, to percent-encoding, to original string.
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    },
  },
};
</script>

<style >
.show-wrapper {
  width: 93.33333333vw;
  max-width: 896px;
  margin: 0 auto;
  text-align: left;
  padding: 0 1em;
}

.show-hgroup,
.show-wrapper {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.text-content {
  line-height: 1.7em;
}
.text-content blockquote {
  background-color: #f3f5f7;
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  color: #2c3e50;
}
.show-h1 {
  margin: 0;
  line-height: 1.625;
}

h1 {
  font-size: 1.75rem;
}
.show-h2 {
  margin: 0;
  color: #9e9e9e;
  font-weight: 400;
}
.text-content h2 {
  font-size: 1.55rem;
}
.text-content li {
  -webkit-margin-before: 1em;
  margin-block-start: 1em;
  -webkit-margin-after: 1em;
  margin-block-end: 1em;
  list-style-type: disc;
  list-style-position: inside;
}
.text-content code {
  background-color: #282c34;
  color: #66d9ef;
  display: block;
  padding: 1.25rem 2.5rem;
  border-radius: 6px;
  white-space: pre;
  overflow-x: scroll;
  margin: 1em 0;
}
.text-content img {
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  max-width: 100%;
  width: 100%;
}

.text-content li {
  -webkit-margin-before: 1em;
  margin-block-start: 1em;
  -webkit-margin-after: 1em;
  margin-block-end: 1em;
  list-style-type: disc;
  list-style-position: inside;
}

.text-content li li {
  list-style-type: circle;
  text-indent: 1.5em;
}

.text-content blockquote {
  background-color: #f3f5f7;
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  color: #2c3e50;
}

.text-content strong {
  font-weight: 700;
}

.text-content thead {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.3s ease;
}

.text-content th {
  padding: 0.3em;
}

.text-content td {
  border-bottom: 1px solid #f0f0f0;
  padding: 1em 0.5em;
  transition: background 0.3s;
}

.text-content tr:hover {
  background: #fafafa;
}

code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #272822;
}

:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #708090;
}

.token.punctuation {
  color: #f8f8f2;
}

.token.namespace {
  opacity: 0.7;
}

.token.constant,
.token.deleted,
.token.property,
.token.symbol,
.token.tag {
  color: #f92672;
}

.token.boolean,
.token.number {
  color: #ae81ff;
}

.token.attr-name,
.token.builtin,
.token.char,
.token.inserted,
.token.selector,
.token.string {
  color: #a6e22e;
}

.language-css .token.string,
.style .token.string,
.token.entity,
.token.operator,
.token.url,
.token.variable {
  color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.class-name,
.token.function {
  color: #e6db74;
}

.token.keyword {
  color: #569cd6;
}

.token.important,
.token.regex {
  color: #fd971f;
}

.token.bold,
.token.important {
  font-weight: 700;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
</style>
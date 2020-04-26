<template>
  <div id="app">
    <div class="titlebar">
      {{ title }}
    </div>
    <Nav class="nav" />
    <router-view class="content" />
  </div>
</template>

<script>
export default {
  components: {
    Nav: () => import("@/components/Nav.vue"),
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
  },
  created() {
    this.$store.dispatch("getConfig");
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "titlebar titlebar"
    "nav content";
  .titlebar {
    grid-area: titlebar;
    border-bottom: 1px solid #eaecef;
  }
  .nav {
    grid-area: nav;
    padding: 0.2em 0.4em;
    background: white;
    border-right: 1px solid #eaecef;
    // color: #;
  }
  .content {
    grid-area: content;
    padding: 1em;
  }
}
</style>

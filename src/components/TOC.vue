<template>
  <div class="toc">
    <a
      class="tocLink"
      v-for="(link, idx) in tocLinks"
      :key="idx"
      :class="getClass(link)"
      @click.prevent="scrollIntoView(`#${link.id}`)"
    >
      {{ link.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "TOC",
  props: {
    tocLinks: Array,
  },
  components: {},
  computed: {},
  methods: {
    scrollIntoView(href) {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    },
    getClass(link) {
      return {
        h1: link.type == "h1",
        h2: link.type == "h2",
        h3: link.type == "h3",
        h4: link.type == "h4",
        h5: link.type == "h5",
        h6: link.type == "h6",
        inView: link.inView,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.toc {
  text-align: left;
  display: flex;
  flex-direction: column;
  width: inherit;
  position: fixed;
  .tocLink {
    width: 100%;
    cursor: pointer;
    &.h1 {
      font-size: 1.2em;
    }
    &.h2 {
      font-size: 1.1em;
      padding-left: 0.2em;
    }
    &.h3 {
      font-size: 1em;
      padding-left: 0.4em;
    }
    &.h4 {
      font-size: 0.9em;
      padding-left: 0.6em;
    }
    &.h5 {
      font-size: 0.8em;
      padding-left: 0.8em;
    }
    &.h6 {
      font-size: 0.7em;
      padding-left: 1em;
    }
    &.inView {
      font-weight: bold;
      //   font-size: 0.7em;
      //   padding-left: 1em;
    }
  }
}
</style>

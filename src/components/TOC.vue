<template>
  <div v-if="tocLinks.length > 0" class="toc">
    <p>Table of Contents</p>
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
  display: flex;
  flex-direction: column;
  width: inherit;
  position: fixed;
  margin: 1em;
  .tocLink {
    cursor: pointer;
    padding: 0.1em 1em;
    border-radius: 5px;
    text-align: left;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #ff6768;
    }
    &.h1 {
      font-size: 1.2em;
    }
    &.h2 {
      font-size: 1.1em;
      padding-left: 1.4em;
    }
    &.h3 {
      font-size: 1em;
      padding-left: 1.8em;
    }
    &.h4 {
      font-size: 0.9em;
      padding-left: 2.2em;
    }
    &.h5 {
      font-size: 0.8em;
      padding-left: 2.6em;
    }
    &.h6 {
      font-size: 0.7em;
      padding-left: 3em;
    }
    &.inView {
      background: #f6f8fa !important;
      cursor: default;
      color: #ff6768;
      text-decoration: none !important;
    }
  }
}
</style>

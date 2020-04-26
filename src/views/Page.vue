<template>
  <div class="page">
    <VueMarkdown class="markdown-body" :source="source"></VueMarkdown>
  </div>
</template>

<script>
// @ is an alias to /src
import VueMarkdown from "vue-markdown";
export default {
  name: "Page",
  components: {
    VueMarkdown,
  },
  computed: {
    navItem() {
      return this.$store.state.navItems.find((item) => item.source == this);
    },
    source() {
      let source = this.$route.params.source;
      if (source == undefined) return this.$store.state.indexMd;

      let item = this.findSource(this.$store.state.navItems, source);
      if (item != undefined) {
        return item.parsedSource;
      }
      return "#testiiii";
      // return this.$route.params.source;
    },
  },
  methods: {
    findSource(items, source) {
      if (Array.isArray(items)) {
        for (let i in items) {
          const foundSource = this.findSource(items[i], source);
          if (foundSource != undefined) return foundSource;
        }
      } else if (items.source != undefined && items.source == source) {
        return items;
      } else if (items.children != undefined) {
        return this.findSource(items.children, source);
      }
      return undefined;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". markdown toc";
  .markdown-body {
    grid-area: markdown;
    text-align: left;
  }
  .toc {
    grid-area: toc;
  }
}
</style>

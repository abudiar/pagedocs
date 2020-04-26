<template>
  <div id="page" @click="isInViewport(tocLinks[0])" @scroll="handleScroll()">
    <VueMarkdown
      class="markdown-body"
      :source="source"
      @rendered="postrender"
    ></VueMarkdown>
    <div class="toc">
      <TOC :tocLinks="tocLinks" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueMarkdown from "vue-markdown";
import TOC from "@/components/TOC";
export default {
  name: "Page",
  components: {
    VueMarkdown,
    TOC,
  },
  data() {
    return {
      tocLinks: [
        {
          type: "h6",
          id: "hello",
        },
      ],
      markdown: "",
      lastInView: 0,
    };
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
      return "";
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
    postrender() {
      setTimeout(this.doTOC, 0);
    },
    addTocClassAndID(els) {
      for (let i in els) {
        if (!els[i].classList.contains("TOC")) els[i].classList.add("TOC");
        const id = els[i].textContent
          .split(" ")
          .join("-")
          .replace(/[\W_]+/g, "");
        if (els[i].id != id) els[i].id = id;
      }
    },
    doTOC() {
      const h1 = document.querySelectorAll("h1");
      const h2 = document.querySelectorAll("h2");
      const h3 = document.querySelectorAll("h3");
      const h4 = document.querySelectorAll("h4");
      const h5 = document.querySelectorAll("h5");
      const h6 = document.querySelectorAll("h6");
      const els = [...h1, ...h2, ...h3, ...h4, ...h5, ...h6];
      this.addTocClassAndID(els);
      const tocEls = document.querySelectorAll(".TOC");
      this.tocLinks = [];
      for (let i in tocEls) {
        if (tocEls[i].nodeName)
          this.tocLinks.push({
            type: tocEls[i].nodeName.toLowerCase(),
            id: tocEls[i].id,
            text: tocEls[i].textContent,
            el: tocEls[i],
          });
      }
    },
    handleScroll() {
      const newToc = [...this.tocLinks];
      let foundOne = false;
      for (let i in newToc) {
        newToc[i]["inView"] = false;
        if (!foundOne) {
          if (this.isInViewport(newToc[i].el)) {
            foundOne = true;
            this.lastInView = i;
            console.log(newToc[i].el.getBoundingClientRect().top);
          }
        }
      }
      if (
        newToc[this.lastInView].el.getBoundingClientRect().top >
          document.documentElement.clientHeight / 2 &&
        this.lastInView > 0
      )
        newToc[this.lastInView - 1]["inView"] = true;
      else newToc[this.lastInView]["inView"] = true;

      this.tocLinks = newToc;
    },
    isInViewport(elem) {
      var bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#page {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". markdown toc";
  overflow-y: auto;
  .markdown-body {
    grid-area: markdown;
    text-align: left;
    // overflow-y: auto;
    scroll-behavior: smooth;
  }
  .toc {
    grid-area: toc;
    // top: 0px;
  }
}
</style>

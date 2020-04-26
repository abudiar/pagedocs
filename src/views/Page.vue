<template>
  <div id="page" @scroll="handleScroll()">
    <VueMarkdown
      class="markdown-body"
      :source="source"
      v-if="source"
      @rendered="postrender"
    ></VueMarkdown>
    <div class="toc-container" v-if="source">
      <TOC :tocLinks="tocLinks" />
    </div>
    <div v-if="!source" class="notfound">
      Page not found!
    </div>
    <div class="footer">
      <router-link
        class="last-item"
        v-if="lastNavItem"
        :to="lastNavItem.source"
      >
        <ChevronLeft />
        <p>{{ lastNavItem.text }}</p>
      </router-link>
      <router-link
        class="next-item"
        v-if="nextNavItem"
        :to="nextNavItem.source"
      >
        <p>{{ nextNavItem.text }}</p>
        <ChevronRight />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueMarkdown from "vue-markdown";
import TOC from "@/components/TOC";
import ChevronLeft from "mdi-vue/ChevronLeft.vue";
import ChevronRight from "mdi-vue/ChevronRight.vue";
export default {
  name: "Page",
  components: {
    VueMarkdown,
    TOC,
    ChevronLeft,
    ChevronRight,
  },
  data() {
    return {
      tocLinks: [],
      markdown: "",
      lastInView: 0,
    };
  },
  computed: {
    navItems() {
      return this.$store.state.navItems;
    },
    navItemIdx() {
      return this.navItems.findIndex(
        (item) => item.source == this.$route.params.source
      );
    },
    navItem() {
      return this.navItems[this.navItemIdx];
    },
    lastNavItem() {
      if (
        this.navItemIdx > 0 &&
        this.isLink(this.navItems[this.navItemIdx - 1])
      )
        return this.navItems[this.navItemIdx - 1];
      return null;
    },
    nextNavItem() {
      if (
        this.navItemIdx < this.navItems.length - 1 &&
        this.isLink(this.navItems[this.navItemIdx + 1])
      )
        return this.navItems[this.navItemIdx + 1];
      return null;
    },
    source() {
      let source = this.$route.params.source;
      if (source == undefined) return this.$store.state.indexMd;

      let item = this.findSource(this.$store.state.navItems, source);
      if (item != undefined) {
        return item.parsedSource;
      }
      return undefined;
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
        if (i == "0") this.tocLinks[i].inView = true;
      }
    },
    isLink(item) {
      if (typeof item === "object" && item["source"] != undefined) {
        return true;
      }
      return false;
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
  grid-template-rows: 1fr auto;
  grid-template-areas:
    ". markdown toc"
    ". footer .";
  overflow-y: auto;
  .markdown-body {
    grid-area: markdown;
    text-align: left;
    scroll-behavior: smooth;
  }
  .toc-container {
    grid-area: toc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer {
    grid-area: footer;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
    grid-template-areas: "last-item . next-item";
    padding: 1em;
    .last-item {
      grid-area: last-item;
      text-decoration: none;
      color: #ff6768;
      display: flex;
      align-items: center;
    }
    .next-item {
      grid-area: next-item;
      text-decoration: none;
      color: #ff6768;
      display: flex;
      align-items: center;
    }
  }
}
</style>

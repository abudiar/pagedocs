<template>
  <div class="nav-item" :class="{ clickable: !isTitle }">
    <!-- {{ item }} -->
    <p class="item-title" v-if="isTitle">{{ item }}</p>
    <router-link class="item-link" v-if="isLink" :to="source">
      {{ item.text }}
    </router-link>
    <a
      class="item-dropdown-name"
      v-if="isDropdown"
      @click="dropdownOpen = !dropdownOpen"
    >
      {{ item.text }}
      <span
        role="img"
        aria-label="ChevronRight icon"
        class="chevron mdi mdi-chevron-right transition"
        ><svg
          fill="currentColor"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="transition"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ 'is-open': dropdownOpen }"
        >
          <!---->
          <path
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          ></path></svg
      ></span>
    </a>
    <div
      class="item-dropdown transition"
      v-if="isDropdown"
      :class="{ 'is-open': dropdownOpen }"
    >
      <NavItem
        v-for="(newItem, idx) in item.children"
        :key="idx"
        :item="newItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  components: {
    NavItem: () => import("./NavItem.vue"),
  },
  props: ["item"],
  data() {
    return {
      dropdownOpen: false,
    };
  },
  computed: {
    isTitle() {
      if (typeof this.item === "string") {
        return true;
      }
      return false;
    },
    isLink() {
      if (typeof this.item === "object" && this.item["source"] != undefined) {
        return true;
      }
      return false;
    },
    isDropdown() {
      if (typeof this.item === "object" && this.item["children"] != undefined) {
        return true;
      }
      return false;
    },
    source() {
      if (this.item.source[0] == "/") {
        return this.item.source;
      }
      return "/" + this.item.source;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-item {
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  .item-title {
    margin-bottom: 0.5em;
    font-size: 0.8rem;
    font-weight: bold;
    padding-left: 1.6em;
  }
  .item-link {
    padding: 0.2em;
    padding-left: 1.6em;
    color: #2c3e50;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #ff6768;
    }
  }
  .item-dropdown-name {
    padding: 0.2em;
    padding-left: 1.6em;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-template-areas: ". chevron";
    .chevron {
      padding-left: 2em;
      grid-area: chevron;
      .is-open {
        transform: rotate(90deg);
      }
    }
  }
  .item-dropdown {
    padding-left: 0.4em;
    max-height: 0;
    &.is-open {
      max-height: 10000vh;
    }
  }
  &.clickable {
    cursor: pointer;
  }
  .router-link-active {
    background: #f6f8fa !important;
    cursor: default;
    color: #ff6768;
    text-decoration: none !important;
  }
  .transition {
    transition: all 0.4s ease;
  }
}
</style>

<template>
  <div class="nav-item" :class="{ clickable: !isTitle }">
    <!-- {{ item }} -->
    <p class="item-title" v-if="isTitle">{{ item }}</p>
    <router-link class="item-link" v-if="isLink" :to="item.source">
      {{ item.text }}
    </router-link>
    <a class="item-dropdown-name" v-if="isDropdown">{{ item.text }}</a>
    <div class="item-dropdown" v-if="isDropdown">
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
  .item-title {
    margin-bottom: 0.5em;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0 1.6em;
    // color: #ff6768;
  }
  .item-link {
    padding: 0.2em 1.6em;
    color: #2c3e50;
    text-decoration: none;
    &:hover {
      background: #f6f8fa;
    }
  }
  .item-dropdown-name {
    padding: 0.2em 1.6em;
    &:hover {
      background: #f6f8fa;
    }
  }
  .item-dropdown {
    padding-left: 0.4em;
    // background: #17223b;
  }
  &.clickable {
    cursor: pointer;
  }
  .router-link-active {
    color: #ff6768;
  }
}
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>

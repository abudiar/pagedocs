<template>
  <div class="toc">
    <NavItem v-for="(item, idx) in navItems" :key="idx" :item="item" />
  </div>
</template>

<script>
export default {
  name: "TOC",
  components: {
    NavItem: () => import("./NavItem.vue"),
  },
  computed: {
    navItems() {
      return this.$store.state.navItems;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

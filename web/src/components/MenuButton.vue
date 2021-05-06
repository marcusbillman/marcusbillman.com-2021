<template>
  <button
    class="menu-button"
    :class="{ 'menu-button--open': $store.state.menuOpen }"
    @click="toggleMenu"
  >
    <Icon name="menu-right" />
  </button>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
import { useStore } from "vuex";

const store = useStore();

function toggleMenu() {
  store.commit("toggleMenuOpen");
}
</script>

<style lang="scss" scoped></style>

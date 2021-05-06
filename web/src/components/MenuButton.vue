<template>
  <button
    class="menu-button"
    :class="{ 'menu-button--open': $store.state.menuOpen }"
    @click="toggleMenu"
  >
    <Icon :name="$store.state.menuOpen ? 'close' : 'menu-right'" />
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

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.menu-button {
  position: fixed;
  bottom: 3.2rem;
  right: 3.2rem;
  display: grid;
  place-items: center;
  width: 4.8rem;
  height: 4.8rem;
  background: $white;
  border: 2px solid $grey-200;
  border-radius: 1000px;
  z-index: 100;
  cursor: pointer;
  @include for-tablet-landscape-up {
    top: 3.2rem;
  }
}
</style>

<template>
  <button
    class="menu-button"
    :class="{ 'menu-button--open': $store.state.menuOpen }"
    aria-label="Toggle menu"
    @click="$store.commit('toggleMenuOpen')"
  >
    <BaseIcon :name="$store.state.menuOpen ? 'close' : 'menu-right'" />
  </button>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.menu-button {
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;
  display: grid;
  place-items: center;
  width: 5.6rem;
  height: 5.6rem;
  background: $white;
  border: 2px solid $grey-200;
  border-radius: 1000px;
  z-index: 101;
  cursor: pointer;
  @include for-tablet-landscape-up {
    top: 3.2rem;
    right: 3.2rem;
    width: 4.8rem;
    height: 4.8rem;
  }
}
</style>

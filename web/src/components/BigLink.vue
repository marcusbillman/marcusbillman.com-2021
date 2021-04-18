<template>
  <a class="big-link" :href="href">
    <slot></slot>
    <i :class="'gg-' + icon"></i>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["href", "icon"]);
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;

.big-link {
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  @include for-desktop-up {
    font-size: 4rem;
  }
  i {
    margin-left: 0.8rem;
    @include for-desktop-up {
      margin-left: 2.4rem;
      --ggs: calc(40 / 22);
    }
  }
}
</style>

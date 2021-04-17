<template>
  <a class="button" :href="href">
    <slot></slot>
    <i class="gg-arrow-top-right"></i>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["href"]);
</script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.button {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $white;
  background: $blueberry-500;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0.8rem;
  padding: 1.4rem 2.4rem;
  i {
    transform: translateY(-2px);
    margin-left: 1.6rem;
  }

  @media screen and (min-width: 40rem) {
    width: auto;
  }
}
</style>

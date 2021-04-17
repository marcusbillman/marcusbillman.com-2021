<template>
  <a class="link-card" :href="href">
    <i :class="'gg-' + icon"></i>
    <div class="link-card__content">
      <span class="link-card__title">{{ title }}</span>
      <span class="link-card__desc">{{ desc }}</span>
    </div>
    <i class="gg-arrow-top-right"></i>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["title", "desc", "href", "icon"]);
</script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.link-card {
  display: flex;
  align-items: center;
  background: $white;
  border-radius: 1.2rem;
  border: 3px solid $grey-200;
  text-decoration: none;
  padding: 1.6rem 2.4rem;
  &__content {
    margin: 0 2.4rem;
  }
  span {
    display: block;
    line-height: 1.5;
  }
  &__title {
    font-weight: 600;
  }
  &__desc {
    color: $grey-600;
  }
  i:first-child {
    color: $blueberry-500;
    --ggs: calc(32 / 22);
  }
  i:last-child {
    color: $grey-400;
  }
}
</style>

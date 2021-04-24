<template>
  <a class="button" :href="href">
    <div class="button__inner">
      <slot></slot>
      <Icon name="arrow-top-right" />
    </div>
  </a>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
import { defineProps } from "vue";

defineProps(["href"]);
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.button {
  width: 100%;
  position: relative;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $blueberry-50;
    border-radius: 0.8rem;
    z-index: -1;
  }
  &:hover {
    .button__inner {
      color: $blueberry-500;
      background: transparent;
      transform: translate(-8px, -8px);
    }
  }
  @include for-tablet-portrait-up {
    width: auto;
  }
  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    background: $blueberry-500;
    border: 2px solid $blueberry-500;
    border-radius: 0.8rem;
    padding: 1.4rem 2.4rem;
    transition: all 0.1s;
  }
}
</style>

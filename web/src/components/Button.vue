<template>
  <component
    class="button"
    :class="variant ? `button--${variant}` : ''"
    :is="/^\/.*/.test(href) ? 'router-link' : 'a'"
    :href="href"
    :to="href"
  >
    <div class="button__inner">
      <slot></slot>
      <Icon :name="icon || 'arrow-right'" />
    </div>
  </component>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
import { defineProps } from "vue";

defineProps(["href", "icon", "variant"]);
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
      border-color: $blueberry-500;
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
    border: 2px solid transparent;
    border-radius: 0.8rem;
    padding: 1.4rem 2.4rem;
    transition: all 0.1s;
  }
  &--secondary .button__inner {
    color: $blueberry-500;
    background: $blueberry-50;
  }
  &--outline .button__inner {
    color: $blueberry-500;
    background: $white;
  }
  .icon {
    margin-left: 1.2rem;
  }
}
</style>

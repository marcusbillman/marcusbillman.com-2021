<template>
  <component
    class="big-link"
    :is="/^\/.*/.test(href) ? 'router-link' : 'a'"
    :href="href"
    :to="href"
  >
    <slot></slot>
    <Icon :name="icon" />
  </component>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
import { defineProps } from "vue";

defineProps(["href", "icon"]);
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;

.big-link {
  display: flex;
  width: max-content;
  align-items: center;
  font-size: 2.4rem;
  margin-left: auto;
  margin-right: auto;
  @include for-desktop-up {
    font-size: 4rem;
  }
  .icon {
    margin-left: 0.8rem;
    @include for-desktop-up {
      transform: scale(calc(40 / 24));
      margin-left: 2.4rem;
    }
  }
}
</style>

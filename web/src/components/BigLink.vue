<template>
  <a class="big-link" :href="href">
    <slot></slot>
    <Icon :name="icon" />
  </a>
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
  align-items: center;
  font-size: 2.4rem;
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

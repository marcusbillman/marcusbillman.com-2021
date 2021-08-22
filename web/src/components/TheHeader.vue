<template>
  <div class="page-header">
    <div class="container">
      <h1 class="page-header__title">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['title'])
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.page-header {
  background: $white;
  padding-top: 2.4rem;
  margin-bottom: 6.4rem;
  @include for-tablet-landscape-up {
    background-image: radial-gradient($grey-200 2px, transparent 0);
    background-size: 32px 32px;
    background-position: center top;
    background-attachment: fixed;
    padding-top: 20rem;
    padding-bottom: 6.4rem;
    &__title {
      text-align: center;
    }
  }
}
</style>

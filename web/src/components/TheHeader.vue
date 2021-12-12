<template>
  <div class="page-header" :class="{ 'page-header--transparent': transparent }">
    <div class="page-header__container container">
      <h1 class="page-header__title">{{ title }}</h1>
      <p v-if="description" class="page-header__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: String,
  transparent: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.page-header {
  padding-top: 4.8rem;
  margin-bottom: 6.4rem;
  &__container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  @include for-tablet-landscape-up {
    &:not(&--transparent) {
      @include dotted-bg;
    }
    padding-top: 20rem;
    padding-bottom: 6.4rem;
    &__container {
      align-items: center;
      gap: 4.8rem;
      text-align: center;
    }
  }
}
</style>

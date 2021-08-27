<template>
  <div class="image-block container container--wide">
    <img class="image-block__img" :src="urlFor(asset)" :alt="alt" />
  </div>
</template>

<script setup>
import { urlFor } from '@/utilities/sanityImageUrl.js'
import { defineProps } from 'vue'

defineProps(['asset', 'alt'])
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;

.image-block {
  &__img {
    object-fit: cover;
    border-radius: 1.6rem;
  }
}
</style>

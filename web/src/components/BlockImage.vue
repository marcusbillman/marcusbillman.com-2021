<template>
  <div class="image-block">
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
  padding: 0 1.6rem;
  @include for-tablet-landscape-up {
    padding: 0 clamp(3.2rem, 40rem, 10vw - 2.4rem);
  }
  &__img {
    object-fit: cover;
    border-radius: 1.6rem;
  }
}
</style>

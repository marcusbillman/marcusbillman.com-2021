<template>
  <figure class="image-block container container--wide">
    <img class="image-block__img" :src="urlFor(asset)" :alt="alt" />
    <figcaption v-if="caption" class="image-block__caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
import { urlFor } from '@/utilities/sanityImageUrl.js'
import { defineProps } from 'vue'

defineProps({
  asset: {
    type: Object,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  caption: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.image-block {
  &__img {
    object-fit: cover;
    border-radius: 1.6rem;
  }
  &__caption {
    max-width: 60ch;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.6;
    color: $grey-600;
    margin-top: 2.4rem;
  }
}
</style>

<template>
  <section class="dribbble">
    <div class="dribbble__container container container--wide">
      <article v-for="shot in shots" :key="shot.id" class="shot">
        <a
          :href="shot.html_url"
          class="shot__link-wrapper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="shot.images.hidpi" :alt="shot.title" class="shot__image" />
          <div class="shot__header">
            <h3 class="shot__title">{{ shot.title }}</h3>
            <BaseIcon name="arrow-top-right" :size="16" />
          </div>
        </a>
      </article>
    </div>
    <BaseButton
      href="https://dribbble.com/marcusbillman"
      variant="secondary"
      icon="arrow-top-right"
      >More design experiments</BaseButton
    >
  </section>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { ref } from 'vue'

const shots = ref([])

const accessToken =
  '4a1d89068492a75650622196e3d34de0e1f6c6c087603d22b1dd6928319849b3'
const shotCount = 4
const url = `https://api.dribbble.com/v2/user/shots?access_token=${accessToken}&per_page=${shotCount}`

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    shots.value = data
  })
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;

.dribbble {
  display: grid;
  justify-items: center;
  gap: 6.4rem;
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3.2rem;
    column-gap: clamp(1.6rem, 3vw, 3.2rem);
    @include for-desktop-up {
      grid-template-columns: repeat(4, 1fr);
      gap: 3.2rem;
    }
  }
}

.shot {
  &__link-wrapper {
    text-decoration: none;
  }
  &__image {
    border-radius: 1.6rem;
    transition: transform 0.2s;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    margin-top: 1.6rem;
    @include for-desktop-up {
      margin-top: 2.4rem;
    }
  }
  .icon {
    margin-top: 0.4rem;
  }
  &:hover {
    .shot__image {
      transform: scale(0.95);
    }
  }
}
</style>

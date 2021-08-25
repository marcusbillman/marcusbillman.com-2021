<template>
  <div class="page">
    <section class="not-found">
      <h1 class="not-found__heading">Hey, you found the 404 page!</h1>
      <p class="not-found__body">
        Unfortunately, you were probably looking for something else. Check the
        URL or return to Home.
      </p>
      <BaseButton href="/" icon="arrow-right">Back to Home</BaseButton>
    </section>
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  height: 100vh;
  min-height: 50rem;
  padding: 0 1.6rem;
  background-image: radial-gradient($grey-200 2px, transparent 0);
  background-size: 32px 32px;
  background-position: center top;
  background-attachment: fixed;
  text-align: center;
  @include for-tablet-portrait-up {
    gap: 6.4rem;
  }
  &__heading {
    max-width: 13ch;
    font-weight: 400;
  }
  &__body {
    font-size: 1.6rem;
  }
}
</style>

<template>
  <section class="contact">
    <h2>Communication is key</h2>
    <BaseButton href="/contact">Contact me</BaseButton>
  </section>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<style lang="scss" scoped>
.contact {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 3.2rem;
}
</style>

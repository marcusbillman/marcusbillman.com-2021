<template>
  <section class="contact">
    <h2>Communication is key</h2>
    <p>
      Want to talk linear gradients or pentatonic scales (or just say hi)?
      You’re welcome to drop a line or two.
    </p>
    <Button href="/contact">Contact me</Button>
  </section>
</template>

<script setup>
import Button from '@/components/Button.vue'
</script>

<style lang="scss" scoped>
.contact {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 3.2rem;
}
</style>

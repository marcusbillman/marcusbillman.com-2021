<template>
  <div class="page">
    <TheHeader title="Portfolio" />
    <ProjectList />
    <div class="container">
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import ContactSection from '@/components/ContactSection.vue'
import ProjectList from '@/components/ProjectList.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;
@use "@/styles/lines" as *;

.container {
  margin-top: 4.8rem;
  @include for-tablet-landscape-up {
    margin-top: 20rem;
  }
}
</style>

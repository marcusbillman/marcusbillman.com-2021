<template>
  <div class="page">
    <div class="container">
      <h1>Portfolio</h1>
      <section class="projects">
        <ProjectCard
          v-for="(project, index) in $store.state.projects"
          :key="project._key"
          :project="project"
          :info-side="index % 2 === 0 ? 'left' : 'right'"
        />
      </section>
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import ContactSection from '@/components/ContactSection.vue'
import ProjectCard from '@/components/ProjectCard.vue'
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

.projects {
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, minmax(20rem, 1fr));
  gap: 6.4rem 3.2rem;
  margin-bottom: 20rem;
  @include for-tablet-portrait-up {
    grid-template-columns: repeat(2, minmax(20rem, 1fr));
    row-gap: 20rem;
    padding-bottom: 40rem;
    .project {
      height: min-content;
      &:nth-child(even) {
        transform: translateY(50%);
      }
    }
  }
  @include vertical-lines {
    &::before,
    &::after {
      top: -20rem;
      z-index: -1;
    }
    &::before {
      left: calc(25% - 2.4rem);
    }
    &::after {
      right: calc(25% - 2.4rem);
    }
  }
}
</style>

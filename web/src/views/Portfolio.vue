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
import ContactSection from "@/components/ContactSection.vue";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.container {
  margin-top: 4.8rem;
  @include for-tablet-landscape-up {
    margin-top: 20rem;
  }
}

h1 {
  font-size: 4rem;
  color: $blueberry-500;
  @include for-tablet-landscape-up {
    display: none;
  }
}

.projects {
  position: relative;
  margin-top: 4.8rem;
  margin-bottom: 20rem;
  > * + * {
    margin-top: 10rem;
  }
  @include for-tablet-landscape-up {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: calc(20rem + 3.2rem);
    .project {
      max-width: calc(50% - 2.4rem);
      height: min-content;
      &:nth-child(even) {
        transform: translateY(40rem);
        margin-left: 4.8rem;
      }
      + .project {
        margin-top: 20rem;
      }
    }
  }
  &::before,
  &::after {
    position: absolute;
    width: 4px;
    top: -20rem;
    bottom: 0;
    background-image: radial-gradient($salmon 2px, transparent 0);
    background-size: 16px 16px;
    background-position: -22px 0;
    z-index: -1;
    pointer-events: none;

    @include for-tablet-landscape-up {
      content: "";
    }
  }
  &::before {
    left: calc(25% - 2.4rem);
    transform: translateX(1.6rem);
  }
  &::after {
    right: calc(25% - 2.4rem);
    transform: translateX(-1.6rem);
  }
}
</style>

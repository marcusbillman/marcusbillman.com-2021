<template>
  <div class="container">
    <div class="projects">
      <ProjectCard
        v-for="(project, index) in $store.state.projects"
        :key="project._key"
        :project="project"
        :info-side="index % 2 === 0 ? 'left' : 'right'"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;

.projects {
  > * + * {
    margin-top: 10rem;
  }
  @include for-tablet-landscape-up {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3.2rem;
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
}
</style>

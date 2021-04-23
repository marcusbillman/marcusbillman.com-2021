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

<style lang="scss" scoped></style>

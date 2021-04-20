<template>
  <div class="container">
    <ProjectCard
      v-for="project in $store.state.projects"
      :key="project._key"
      :project="project"
    />
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<style lang="scss" scoped></style>

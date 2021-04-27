<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const slug = route.params.slug;
const project = computed(() => store.getters.getProjectBySlug(slug));
</script>

<style lang="scss" scoped></style>

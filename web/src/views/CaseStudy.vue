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

const project = computed(() =>
  store.getters.getProjectBySlug(route.params.slug)
);
</script>

<style lang="scss" scoped></style>

<template>
  <h1>Case Study page</h1>
  <p>Very nice {{ $store.state.projects }}</p>
  <p>{{ project }}</p>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

// const project = ref({});

setTimeout(async () => {
  console.log(await store.getters.getProjectBySlug("lorem-ipsum"));
}, 1000);

const unsubscribe = store.subscribe((mutation, state) => {
  console.log(mutation.type);
  console.log(mutation.payload);
});

unsubscribe();

// const shit = await store.getters.getProjectBySlug("lorem-ipsum");
// project.value = await store.getters.getProjectBySlug("lorem-ipsum");
</script>

<style lang="scss" scoped></style>

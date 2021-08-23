<template>
  <section class="projects">
    <ProjectListCard
      v-for="(project, index) in projectsToShow"
      :key="project._key"
      :project="project"
      :info-side="index % 2 === 0 ? 'left' : 'right'"
      :compact="compact"
    />
  </section>
</template>

<script setup>
import ProjectListCard from '@/components/ProjectListCard.vue'
import { computed, defineProps, toRefs } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps(['compact', 'featuredOnly'])

// Read the featuredOnly prop and decide what projects to show
const { featuredOnly } = toRefs(props)
const projectsToShow = computed(() =>
  featuredOnly.value ? store.getters.getFeaturedProjects : store.state.projects
)
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;

.projects {
  display: grid;
  grid-template-columns: repeat(1, minmax(20rem, 1fr));
  gap: 6.4rem;
  @include for-tablet-landscape-up {
    row-gap: clamp(6.4rem, 20rem, 10vw);
    padding: 0 clamp(3.2rem, 40rem, 10vw - 2.4rem);
  }
  @include for-desktop-up {
    grid-template-columns: repeat(2, minmax(20rem, 1fr));
    .project {
      &:nth-child(even) {
        transform: translateY(50%);
      }
      &:last-child {
        margin-bottom: 50%;
      }
    }
  }
}
</style>

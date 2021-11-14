<template>
  <section class="work">
    <ProjectList :featured-only="featuredOnly" />
    <BaseButton
      v-if="
        featuredOnly &&
        store.state.projects.length > store.getters.getFeaturedProjects.length
      "
      href="/portfolio"
      icon="arrow-right"
    >
      More work
    </BaseButton>
  </section>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import ProjectList from '@/components/ProjectList.vue'
import { defineProps } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
defineProps(['featuredOnly'])
</script>

<style lang="scss" scoped>
.work {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
}
</style>

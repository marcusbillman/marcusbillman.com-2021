<template>
  <section class="work">
    <ProjectList :featured-only="featuredOnly" />
    <BaseButton v-if="featuredOnly" href="/portfolio" icon="arrow-right">
      More work
    </BaseButton>
  </section>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import ProjectList from '@/components/ProjectList.vue'
import { defineProps } from 'vue'

defineProps(['featuredOnly'])
</script>

<style lang="scss" scoped>
.work {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
  padding: 0 1.6rem;
}
</style>

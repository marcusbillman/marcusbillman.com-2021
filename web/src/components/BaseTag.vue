<template>
  <div class="tag">
    {{ text }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.tag {
  display: inline-block;
  white-space: nowrap;
  font-size: 1.6rem;
  font-weight: 500;
  background: $white;
  border-radius: 1000px;
  border: 2px solid $grey-200;
  padding: 0.2rem 1.6rem;
}
</style>

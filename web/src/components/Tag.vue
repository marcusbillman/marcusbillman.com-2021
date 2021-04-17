<template>
  <div class="tag">
    {{ text }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.tag {
  display: inline-block;
  font-weight: 500;
  background: $white;
  border-radius: 1000px;
  border: 3px solid $grey-200;
  padding: 0.2rem 1.6rem;
}
</style>

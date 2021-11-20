<template>
  <a class="link-card" :href="href">
    <BaseIcon :name="icon" size="32" />
    <div class="link-card__content">
      <span class="link-card__title">{{ title }}</span>
      <span class="link-card__desc">{{ desc }}</span>
    </div>
    <BaseIcon name="arrow-top-right" />
  </a>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import { defineProps } from 'vue'

defineProps(['title', 'desc', 'href', 'icon'])
</script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.link-card {
  display: flex;
  align-items: center;
  background: $white;
  border-radius: 1.2rem;
  border: 2px solid $grey-200;
  text-decoration: none;
  padding: 1.6rem 2.4rem;
  transition: transform 0.2s;
  &__content {
    flex-grow: 1;
    margin: 0 1.6rem;
  }
  span {
    display: block;
    line-height: 1.2;
  }
  &__title {
    font-weight: 700;
  }
  &__desc {
    color: $grey-600;
  }
  .icon:first-child {
    color: $blueberry-500;
  }
  .icon:last-child {
    color: $grey-400;
  }
  &:hover {
    transform: translateY(-8%);
  }
}
</style>

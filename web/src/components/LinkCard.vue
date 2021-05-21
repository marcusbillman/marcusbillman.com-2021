<template>
  <a class="link-card" :href="href">
    <Icon :name="icon" size="32" />
    <div class="link-card__content">
      <span class="link-card__title">{{ title }}</span>
      <span class="link-card__desc">{{ desc }}</span>
    </div>
    <Icon name="arrow-top-right" />
  </a>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import { defineProps } from 'vue'

defineProps(['title', 'desc', 'href', 'icon'])
</script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.link-card {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background: $white;
  border-radius: 1.2rem;
  border: 2px solid $grey-200;
  text-decoration: none;
  padding: 1.6rem 2.4rem;
  &__content {
    margin: 0 1.6rem;
  }
  span {
    display: block;
    line-height: 1.5;
  }
  &__title {
    font-weight: 600;
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
}
</style>

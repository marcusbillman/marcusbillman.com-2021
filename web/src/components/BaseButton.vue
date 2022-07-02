<template>
  <component
    :is="component"
    class="button"
    :class="variant ? `button--${variant}` : ''"
    :href="href"
    :to="href"
    :target="component === 'a' ? '_blank' : ''"
    rel="noopener noreferrer"
  >
    <div class="button__inner">
      <slot></slot>
      <BaseIcon :name="icon" />
    </div>
  </component>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import { computed, defineProps } from 'vue'

const props = defineProps({
  href: String,
  icon: {
    type: String,
    default: 'arrow-right'
  },
  variant: String,
  type: String // For form submit button: <button type="submit" />
})

const component = computed(() => {
  if (props.type) return 'button'
  if (props.href.startsWith('/')) return 'router-link'
  return 'a'
})
</script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.button {
  // General button styles
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  background: transparent;
  border: none;
  border-radius: 1000px;
  padding: 0;
  z-index: 0;
  cursor: pointer;
  .icon {
    margin-left: 1.2rem;
  }

  // Main coloured element with content
  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    background: $blueberry-500;
    border: 2px solid transparent;
    border-radius: inherit;
    padding: 1.6rem 3.2rem;
    transition: all 0.15s;
  }

  // Faded background shape (visible when hovering)
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $blueberry-50;
    border-radius: inherit;
    z-index: -1;
  }

  // Hover effect
  &:hover .button__inner {
    color: $blueberry-500;
    background: transparent;
    border-color: $blueberry-500;
    transform: translate(-8px, -8px);
  }

  // Secondary variant
  &--secondary .button__inner {
    color: $blueberry-500;
    background: $blueberry-50;
  }

  // Outline variant
  &--outline .button__inner {
    color: $blueberry-500;
    background: $white;
  }
}
</style>

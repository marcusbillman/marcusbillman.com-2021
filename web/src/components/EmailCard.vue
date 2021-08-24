<template>
  <div class="email-card">
    <div class="email-card__email">
      <span ref="email">hello@marcusbillman.com</span>
    </div>
    <div class="email-card__actions">
      <a class="icon-link" @click="copyEmail">
        <BaseIcon name="copy" />
        <span>{{ copyLinkText }}</span>
      </a>
      <a class="icon-link" href="mailto:hello@marcusbillman.com">
        <BaseIcon name="arrow-top-right" />
        <span>Open email app</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import useClipboard from 'vue-clipboard3'
import { ref } from 'vue'

const { toClipboard } = useClipboard()

const copyLinkText = ref('Copy')

async function copyEmail() {
  await toClipboard('hello@marcusbillman.com')
  copyLinkText.value = 'Copied!'
  setTimeout(() => {
    copyLinkText.value = 'Copy'
  }, 5000)
}
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.email-card {
  border: 2px solid $grey-200;
  border-radius: 0.8rem;
  @include for-tablet-portrait-up {
    width: max-content;
  }
  &__email {
    font-weight: 700;
    text-align: center;
    padding: 1.6rem 2.4rem;
  }
  &__actions {
    display: flex;
    justify-content: center;
    gap: 3.2rem;
    border-top: 2px solid $grey-200;
    padding: 1.6rem 2.4rem;
  }
}

.icon-link {
  color: $blueberry-500;
  display: flex;
  gap: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}
</style>

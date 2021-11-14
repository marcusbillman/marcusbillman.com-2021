<template>
  <section :class="{ 'socials--vertical': forceVertical }" class="socials">
    <div class="socials__content">
      <LinkCard
        title="Dribbble"
        desc="marcusbillman"
        href="https://dribbble.com/marcusbillman"
        icon="dribbble"
      ></LinkCard>
      <LinkCard
        title="GitHub"
        desc="marcusbillman"
        href="https://github.com/marcusbillman"
        icon="code-slash"
      ></LinkCard>
      <LinkCard
        title="SoundCloud"
        desc="Marcus Billman"
        href="https://soundcloud.com/xfoxx37"
        icon="music"
      ></LinkCard>
    </div>
  </section>
</template>

<script setup>
import LinkCard from '@/components/LinkCard.vue'
import { defineProps } from 'vue'

defineProps(['forceVertical'])
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;

.socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  &:not(&--vertical) &__content {
    @include for-tablet-landscape-up {
      flex-direction: row;
      gap: 3.2rem;
    }
  }
}
</style>

<template>
  <div class="page">
    <main>
      <HeroSection />
      <div class="sections">
        <section class="bio section">
          <div class="bio__container container">
            <div class="bio__content">
              <p class="bio__body">
                I’m Marcus. I design cohesive, helpful and accessible web
                experiences that simply feel great. I’m also a hobbyist music
                producer.
              </p>
              <BaseButton href="/about" variant="secondary" icon="arrow-right"
                >About me</BaseButton
              >
            </div>
            <svg
              class="bio__ruler-border"
              preserveAspectRatio="none"
              viewBox="0 0 1204 1216"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                vector-effect="non-scaling-stroke"
                d="M2 0V1198C2 1206.84 9.16343 1214 18 1214H1186C1194.84 1214 1202 1206.84 1202 1198V0"
                stroke="#3257E0"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="0.1 12"
              />
            </svg>
          </div>
        </section>
        <WorkSection :featured-only="true" />
        <DribbbleSection />
        <SocialsSection />
        <ContactSection />
      </div>
    </main>
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import ContactSection from '@/components/ContactSection.vue'
import DribbbleSection from '@/components/DribbbleSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import SocialsSection from '@/components/SocialsSection.vue'
import WorkSection from '@/components/WorkSection.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

// Entrance animations
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.from('.bio__ruler-border', {
    opacity: 0,
    duration: 1,
    delay: 1
  })
  gsap.from('.navbar', {
    y: '-200%',
    duration: 0.5,
    delay: 1,
    ease: 'power2.out',
    clearProps: 'transform'
  })
  gsap.from('.menu-button', {
    x: '200%',
    duration: 0.5,
    delay: 1.2,
    ease: 'power2.out'
  })
})
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.sections {
  padding-top: 6.4rem;
}

.bio {
  &__container {
    position: relative;
    max-width: calc(100rem + 6.4rem);
    z-index: 1;
    @include for-tablet-landscape-up {
      padding: 0;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.2rem;
    background: $white;
    @include for-tablet-landscape-up {
      flex-direction: row;
      align-items: center;
      padding: 3.2rem;
    }
  }
  &__ruler-border {
    display: none;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translateX(-50%);
    width: 120rem;
    height: calc(100vh + 100%);
    overflow: visible;
    z-index: -1;
    pointer-events: none;
    @include for-desktop-up {
      display: block;
    }
  }
}
</style>

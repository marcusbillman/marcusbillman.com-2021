<template>
  <div class="page">
    <main>
      <HeroSection />
      <div class="sections">
        <section class="bio section">
          <div class="bio__content container">
            <p class="bio__body">
              I’m Marcus. I design cohesive, helpful and accessible web
              experiences that simply feel great. I’m also a hobbyist music
              producer.
            </p>
            <BaseButton href="/about" variant="secondary" icon="arrow-right"
              >About me</BaseButton
            >
          </div>
        </section>
        <section class="featured-work section">
          <ProjectList compact="true" />
          <BaseButton href="/portfolio" icon="arrow-right"
            >More work</BaseButton
          >
        </section>
        <section class="socials section">
          <div class="socials__content">
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
            <LinkCard
              title="Instagram"
              desc="marcusbillman"
              href="https://www.instagram.com/marcusbillman"
              icon="instagram"
            ></LinkCard>
          </div>
        </section>
        <ContactSection />
      </div>
    </main>
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseTag from '@/components/BaseTag.vue'
import ContactSection from '@/components/ContactSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import LinkCard from '@/components/LinkCard.vue'
import ProjectList from '@/components/ProjectList.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;
@use "@/styles/lines" as *;

.sections {
  display: flex;
  flex-direction: column;
  gap: clamp(10rem, 20rem, 20vh);
  padding-top: 6.4rem;
}

.bio {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.2rem;
    max-width: 106.4rem;
  }
  @include for-tablet-landscape-up {
    &__content {
      flex-direction: row;
      align-items: center;
      padding: 3.2rem;
    }
  }
}

.featured-work {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
  padding: 0 1.6rem;
}

.socials {
  display: grid;
  place-items: center;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    @include for-tablet-landscape-up {
      flex-direction: row;
      gap: 3.2rem;
    }
  }
}
</style>

<template>
  <div class="page">
    <main class="container">
      <div class="flow sections">
        <Hero />
        <section class="bio">
          <p class="bio__content">
            I’m Marcus. I design websites and interfaces, and develop
            experiences for the web. I’m also a hobbyist music producer.
          </p>
        </section>
        <div class="illustration">
          <img
            v-svg-inline
            src="@/assets/illustration-design.svg"
            alt="Design illustration"
          />
        </div>
        <section class="design">
          <div class="preheader">
            <span class="preheader__number">01</span>
            <span class="preheader__title">WEB & DESIGN</span>
          </div>
          <div class="section-container">
            <div class="splitter design__info">
              <div class="flow design__left">
                <h2>The web is my oyster</h2>
                <p>
                  Few things excite me as much as clean, smooth websites that
                  just feel spot-on. My designs focus on being expressive,
                  helpful and accessible.
                </p>
              </div>
              <div class="design__right">
                <h3>Tools I like using</h3>
                <div class="design__tools">
                  <Tag text="Vue 3" />
                  <Tag text="SCSS" />
                  <Tag text="GSAP" />
                  <Tag text="Git" />
                  <Tag text="Netlify" />
                  <Tag text="Firebase" />
                  <Tag text="Figma" />
                  <Tag text="Node.js" />
                </div>
              </div>
            </div>
            <div class="design__projects">
              <div class="design__featured-projects">
                <ProjectCard
                  v-for="project in $store.getters.getFeaturedProjects"
                  :key="project._key"
                  :project="project"
                  compact="true"
                />
              </div>
              <BigLink href="/portfolio" icon="arrow-right">More work</BigLink>
            </div>
          </div>
        </section>
        <div class="illustration">
          <img
            v-svg-inline
            class="illustration"
            src="@/assets/illustration-music.svg"
            alt="Music illustration"
          />
        </div>
        <section class="music">
          <div class="preheader">
            <span class="preheader__number">02</span>
            <span class="preheader__title">MUSIC</span>
          </div>
          <div class="flow section-container">
            <h2>Beats and jams</h2>
            <p>
              During my day, I subconsciously tap drum beats on tables and hum
              cheesy melodies. My free creative outlet is electronic music.
            </p>
            <Button href="https://soundcloud.com/xfoxx37"
              >Listen on SoundCloud</Button
            >
          </div>
        </section>
        <section class="socials">
          <div class="splitter socials__content">
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
import BigLink from '@/components/BigLink.vue'
import Button from '@/components/Button.vue'
import ContactSection from '@/components/ContactSection.vue'
import Hero from '@/components/Hero.vue'
import LinkCard from '@/components/LinkCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import Tag from '@/components/Tag.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;
@use "@/styles/lines" as *;

.page {
  margin-top: 0;
}

.container {
  @include for-desktop-up {
    @include vertical-lines;
  }
}

.preheader {
  display: flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 6.4rem;
  &__number {
    color: $grey-400;
    margin-right: 1.2rem;
  }
  &::before {
    @include horizontal-line;
    @include for-desktop-up {
      width: 12.8rem;
      margin-left: 1.6rem;
      margin-right: 2.4rem;
    }
  }
}

.sections {
  --spacing: 20rem;
}

section .flow {
  --spacing: 3.2rem;
}

.section-container {
  @include for-desktop-up {
    margin: 0 10rem;
  }
}

.bio {
  display: flex;
  flex-direction: row;
  align-items: center;
  &__content {
    max-width: 70rem;
    font-size: 2.4rem;
  }
  @include for-desktop-up {
    @include horizontal-lines {
      &::before {
        flex-grow: 0;
      }
    }
  }
}

.design {
  &__tools {
    max-width: 30rem;
    margin-top: 0.8rem;
    * {
      margin-top: 1rem;
      margin-right: 1rem;
    }
  }
  &__featured-projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 6.4rem 3.2rem;
    margin-top: 15rem;
    margin-bottom: 10rem;
  }
}

.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &__content {
    --splitter-spacing: 2.4rem;
    > :nth-child(1) {
      transform: translateX(-3.2rem);
    }
    > :nth-child(3) {
      transform: translateX(3.2rem);
    }
    @include for-tablet-landscape-up {
      --splitter-spacing: 3.2rem;
      > :nth-child(1),
      > :nth-child(3) {
        transform: none;
      }
    }
  }
  @include for-tablet-landscape-up {
    @include horizontal-lines;
  }
}

.illustration {
  display: grid;
  place-items: center;
}
</style>

<template>
  <div class="page">
    <main class="page-container">
      <div class="flow sections">
        <section class="hero">
          <div class="hero__box">
            <span class="hero__name">Marcus Billman</span>
            <div class="hero__main">
              <h1 class="hero__heading">
                My art is arranging links and shapes into
                <span class="hero__bold">experiences.</span>
              </h1>
              <i class="gg-arrow-down"></i>
            </div>
          </div>
        </section>
        <section class="bio">
          <p class="bio__content">
            I’m Marcus. I design websites and interfaces, and develop
            experiences for the web. I’m also a hobbyist music producer.
          </p>
        </section>
        <img
          v-svg-inline
          class="illustration"
          src="@/assets/illustration-design.svg"
          alt="Design illustration"
        />
        <section class="design">
          <div class="preheader">
            <span class="preheader__number">01</span>
            <span class="preheader__title">WEB & DESIGN</span>
          </div>
          <div class="container">
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
              <!-- Featured projects go here -->
              <BigLink href="/portfolio" icon="arrow-right">More work</BigLink>
            </div>
          </div>
        </section>
        <img
          v-svg-inline
          class="illustration"
          src="@/assets/illustration-music.svg"
          alt="Music illustration"
        />
        <section class="music">
          <div class="preheader">
            <span class="preheader__number">02</span>
            <span class="preheader__title">MUSIC</span>
          </div>
          <div class="flow container">
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
        <section class="contact">
          <div class="flow">
            <h2>Communication is key</h2>
            <p>
              Want to talk linear gradients or pentatonic scales (or just say
              hi)? You’re welcome to drop a line or two.
            </p>
            <Button href="/contact">Contact me</Button>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.hero {
  height: 100vh;
  display: grid;
  place-items: center;
  &__box {
    position: relative;
    height: 70%;
    max-height: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid $grey-200;
    border-radius: 2.4rem;
    padding: 0 1.6rem;
    &::before,
    &::after {
      content: "";
      position: absolute;
      pointer-events: none;
    }
    &::before {
      width: 527px;
      height: 359px;
      top: -160px;
      left: -170px;
      background-image: url("@/assets/squiggle-1.svg");
    }
    &::after {
      width: 538px;
      height: 348px;
      bottom: -60px;
      right: -275px;
      background-image: url("@/assets/squiggle-2.svg");
    }
  }
  &__name {
    font-weight: 600;
    color: $grey-800;
    margin-top: 6.4rem;
  }
  &__main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__heading {
    text-align: center;
    margin-bottom: 6.4rem;
  }
  &__bold {
    font-weight: 500;
    color: $blueberry-500;
  }
  i {
    --ggs: calc(32 / 22);
    color: $blueberry-500;
  }
}

@media screen and (min-width: 900px) {
  .hero {
    &__box {
      width: calc(100% + 12.8rem);
      padding: 0 16rem;
      &::before {
        top: -60px;
        left: -130px;
      }
      &::after {
        bottom: -40px;
        right: -80px;
      }
    }
    &__name {
      display: none;
    }
    &__main {
      align-items: start;
    }
    &__heading {
      max-width: 60rem;
      text-align: left;
    }
  }
}

.preheader {
  display: flex;
  align-items: center;
  color: $grey-800;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 6.4rem;
  &__number {
    color: $grey-400;
    margin-right: 1.2rem;
  }
  &::before {
    content: "";
    width: 12.8rem;
    height: 4px;
    background-image: radial-gradient($salmon 2px, transparent 0);
    background-size: 16px 16px;
    background-position: -22px 10px;
    pointer-events: none;
    margin-left: 1.2rem;
    margin-right: 2.4rem;
  }
}

.sections {
  --spacing: 20rem;
}

section .flow {
  --spacing: 3.2rem;
}

.contact {
  align-items: center;
  text-align: center;
}
</style>

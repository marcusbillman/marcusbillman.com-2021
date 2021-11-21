<template>
  <div class="page">
    <TheHeader title="About" />
    <div class="sections">
      <section class="hello section">
        <div class="hello__container container">
          <img
            class="hello__profile-picture"
            src="@/assets/profile-picture.jpg"
            alt="Profile picture"
          />
          <p class="hello__body">
            Hej! 👋 I’m Marcus and I love designing apps and websites that look
            and feel great. I live in Sweden.
          </p>
        </div>
      </section>
      <section class="topic section">
        <div class="topic__container container">
          <p class="topic__body">
            When I was a kid, I was blown away by automatic doors. They looked
            so futuristic being made of glass, and they opened like magic as I
            walked up to them! Since then, I’ve gotten over the doors, but I’m
            still fascinated by all kinds of tech. When I got my first Android
            phone, I spent lots of time customising it with wallpapers, icon
            packs and apps. Making my phone look and work however I wanted was
            an unexpected creative outlet. Today, my mind has ended up somewhere
            between tech and design.
          </p>
        </div>
      </section>
      <section class="topic section">
        <div class="topic__container container">
          <div class="topic__graphic">
            <BaseIllustration name="browser" />
            <BaseIllustration name="code-block" />
            <BaseIllustration name="phone" />
          </div>
          <p class="topic__body">
            I design mainly for the web and I have experience with front-end web
            development using tools like Vue, React and SCSS. When designing and
            building websites, I strive to make them useful, accessible and
            enjoyable to use.
          </p>
        </div>
      </section>
      <section class="topic section">
        <div class="topic__container container">
          <div class="topic__graphic">
            <BaseIllustration name="cable" />
            <BaseIllustration name="audio-file" />
            <BaseIllustration name="daw" />
            <BaseIllustration name="knob" />
          </div>
          <p class="topic__body">
            When free and not designing or coding, I like following the latest
            in tech news and tinkering with my devices. I also very much enjoy
            music (both listening and creating) and playing video games with
            friends.
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import BaseIllustration from '@/components/BaseIllustration.vue'
import TheHeader from '@/components/TheHeader.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.hello {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    @include for-tablet-landscape-up {
      flex-direction: row;
    }
  }
  &__profile-picture {
    width: 12rem;
    height: 12rem;
    border-radius: 1000px;
  }
  &__body {
    font-weight: 500;
    text-align: center;
    @include for-tablet-landscape-up {
      text-align: left;
    }
  }
}

.topic {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    @include for-tablet-landscape-up {
      flex-direction: row;
    }
  }
  &__graphic {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 40rem;
    max-height: 40rem;
    aspect-ratio: 1 / 1;
    @include dotted-bg;
    @include for-tablet-landscape-up {
      width: 40rem;
      height: 40rem;
    }
  }
}

.illustration {
  position: absolute;

  // Topic 2
  &--browser {
    top: 15%;
    left: 10%;
  }
  &--code-block {
    right: 20%;
    bottom: 15%;
  }
  &--phone {
    right: 10%;
    bottom: 27%;
  }

  // Topic 3
  &--cable {
    top: 0%;
    left: 5%;
  }
  &--audio-file {
    top: 20%;
    left: 15%;
  }
  &--knob {
    top: 25%;
    right: 10%;
  }
  &--daw {
    right: 20%;
    bottom: 10%;
  }
}
</style>

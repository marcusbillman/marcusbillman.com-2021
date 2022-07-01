<template>
  <section class="hero">
    <div class="hero__container container container--wide">
      <div class="hero__box">
        <div class="hero__main">
          <span class="hero__name">Marcus Billman</span>
          <h1 class="hero__heading">
            Arranging links and shapes into melodies.
          </h1>
          <BaseIcon name="arrow-down" :size="32" />
        </div>
        <BaseIllustration name="bezier-curve" />
        <BaseIllustration name="browser" />
        <BaseIllustration name="phone" />
        <BaseIllustration name="dropdown" />
        <BaseIllustration name="button-click" />
        <BaseIllustration name="code-block" />
        <BaseIllustration name="switch" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import BaseIllustration from '@/components/BaseIllustration.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import charming from 'charming'

// Entrance animations
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const heroHeading = document.querySelector('.hero__heading')
  charming(heroHeading, {
    split: function (string) {
      return string.split(/(\s+)/)
    }
  })

  gsap
    .timeline({
      defaults: {
        duration: 1,
        ease: 'power2.out'
      }
    })
    .from('.hero', {
      scale: 0,
      clearProps: 'all'
    })
    .from(
      '.hero__main span',
      {
        yPercent: 100,
        clipPath: 'inset(0 0 100% 0)',
        stagger: 0.05
      },
      '-=0.7'
    )
    .from(
      '.hero .icon',
      {
        y: 50,
        opacity: 0
      },
      '-=0.7'
    )

  gsap
    .timeline({
      defaults: {
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(0.3, 0.3)'
      },
      delay: 1
    })
    .from('.illustration--bezier-curve', {
      x: 50,
      y: 50
    })
    .from(
      '.illustration--browser',
      {
        x: -10,
        y: 50
      },
      '<0.1'
    )
    .from(
      '.illustration--phone',
      {
        x: -50,
        y: 50
      },
      '<0.1'
    )
    .from(
      '.illustration--switch',
      {
        x: -50,
        y: -10
      },
      '<0.1'
    )
    .from(
      '.illustration--code-block',
      {
        x: -50,
        y: -50
      },
      '<0.1'
    )
    .from(
      '.illustration--button-click',
      {
        x: 10,
        y: -50
      },
      '<0.1'
    )
    .from(
      '.illustration--dropdown',
      {
        x: 50,
        y: -50
      },
      '<0.1'
    )
})
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.hero {
  // Full-screen hero container
  height: 100vh;
  min-height: 50rem;
  @include dotted-bg;

  &__container {
    height: 100%;
    display: grid;
    place-items: center;
  }

  // Floating box
  &__box {
    position: relative;
    width: 100%;
    max-width: 132rem;
    height: max(75%, 50rem);
    max-height: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $white;
    border: 2px solid $grey-200;
    border-radius: 2.4rem;
  }
  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 3.2rem;
    @include for-tablet-portrait-up {
      gap: 6.4rem;
    }
  }
  &__name {
    @include for-tablet-landscape-up {
      display: none;
    }
  }
  &__heading {
    max-width: 13ch;
    font-weight: 400;
    text-align: center;
  }

  // Illustrations
  .illustration {
    position: absolute;
    display: none;
    &--bezier-curve {
      display: block;
      top: clamp(-2rem, calc(20vw - 15rem), 7rem);
      left: clamp(3rem, calc(20vw - 13rem), 17rem);
    }
    &--phone {
      display: block;
      top: clamp(4rem, 6vw, 6rem);
      right: clamp(-4rem, calc(13vw - 10rem), 10rem);
    }
    &--dropdown {
      display: block;
      left: clamp(-4rem, calc(13vw - 10rem), 10rem);
      bottom: clamp(5rem, 10vw, 15rem);
    }
    &--code-block {
      display: block;
      right: clamp(-10rem, calc(20vw - 20rem), 15rem);
      bottom: clamp(-2rem, calc(15vw - 13rem), 10rem);
    }
    @include for-tablet-landscape-up {
      &--browser {
        display: block;
        top: -2.3rem;
        right: clamp(4rem, 15vw, 23rem);
      }
      &--button-click {
        display: block;
        left: clamp(20rem, calc(30vw - 10rem), 32rem);
        bottom: clamp(-2rem, calc(7vw - 6rem), 5rem);
      }
      &--switch {
        display: block;
        right: clamp(4rem, calc(15vw - 14rem), 13rem);
        bottom: clamp(15rem, calc(10vw + 8rem), 23rem);
      }
    }
  }
}
</style>

<style lang="scss">
.hero__heading span {
  display: inline-block;
  margin-right: 0.6rem;
}
</style>

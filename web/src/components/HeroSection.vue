<template>
  <section class="hero">
    <div class="hero__container container container--wide">
      <div class="hero__box">
        <div class="hero__main">
          <span class="hero__name">Marcus Billman</span>
          <h1 class="hero__heading">
            Arranging links and shapes into melodies.
          </h1>
          <BaseIcon name="arrow-down" size="32" />
        </div>
        <img
          v-svg-inline
          class="illustration illustration--bezier-curve"
          src="@/assets/illustration-bezier-curve.svg"
          alt="Bezier curve"
        />
        <img
          v-svg-inline
          class="illustration illustration--browser"
          src="@/assets/illustration-browser.svg"
          alt="Browser"
        />
        <img
          v-svg-inline
          class="illustration illustration--phone"
          src="@/assets/illustration-phone.svg"
          alt="Phone"
        />
        <img
          v-svg-inline
          class="illustration illustration--dropdown"
          src="@/assets/illustration-dropdown.svg"
          alt="Dropdown menu"
        />
        <img
          v-svg-inline
          class="illustration illustration--button-click"
          src="@/assets/illustration-button-click.svg"
          alt="Button being clicked"
        />
        <img
          v-svg-inline
          class="illustration illustration--code-block"
          src="@/assets/illustration-code-block.svg"
          alt="Code block"
        />
        <img
          v-svg-inline
          class="illustration illustration--switch"
          src="@/assets/illustration-switch.svg"
          alt="Switch"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
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
    @include for-tablet-portrait-up {
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
      top: clamp(4rem, calc(6vw + 0rem), 6rem);
      right: clamp(-4rem, calc(13vw - 10rem), 10rem);
    }
    &--dropdown {
      display: block;
      left: clamp(-4rem, calc(13vw - 10rem), 10rem);
      bottom: clamp(5rem, calc(10vw + 0rem), 15rem);
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
        right: clamp(4rem, calc(15vw + 0rem), 23rem);
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

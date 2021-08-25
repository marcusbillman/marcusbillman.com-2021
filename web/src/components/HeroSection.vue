<template>
  <section class="hero">
    <div class="hero__box">
      <div class="hero__main">
        <span class="hero__name">Marcus Billman</span>
        <h1 class="hero__heading">Arranging links and shapes into melodies.</h1>
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
  display: grid;
  place-items: center;
  padding: 0 1.6rem;
  background-image: radial-gradient($grey-200 2px, transparent 0);
  background-size: 32px 32px;
  background-position: center top;
  background-attachment: fixed;
  @include for-tablet-portrait-up {
    padding: 0 clamp(3.2rem, 40rem, 10vw - 2.4rem);
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
      top: clamp(-2rem, 7rem, calc(20vw - 15rem));
      left: clamp(3rem, 17rem, calc(20vw - 13rem));
    }
    &--phone {
      display: block;
      top: clamp(4rem, 6rem, calc(6vw + 0rem));
      right: clamp(-4rem, 10rem, calc(13vw - 10rem));
    }
    &--dropdown {
      display: block;
      left: clamp(-4rem, 10rem, calc(13vw - 10rem));
      bottom: clamp(5rem, 15rem, calc(10vw + 0rem));
    }
    &--code-block {
      display: block;
      right: clamp(-10rem, 15rem, calc(20vw - 20rem));
      bottom: clamp(-2rem, 10rem, calc(15vw - 13rem));
    }
    @include for-tablet-landscape-up {
      &--browser {
        display: block;
        top: -2.3rem;
        right: clamp(4rem, 23rem, calc(15vw + 0rem));
      }
      &--button-click {
        display: block;
        left: clamp(20rem, 32rem, calc(30vw - 10rem));
        bottom: clamp(-2rem, 5rem, calc(7vw - 6rem));
      }
      &--switch {
        display: block;
        right: clamp(4rem, 13rem, calc(15vw - 14rem));
        bottom: clamp(15rem, 23rem, calc(10vw + 8rem));
      }
    }
  }
}
</style>

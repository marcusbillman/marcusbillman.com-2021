<template>
  <section class="hero">
    <div class="hero__box">
      <span class="hero__name">Marcus Billman</span>
      <div class="hero__main">
        <h1 class="hero__heading">
          My art is arranging links and shapes into
          <span class="hero__bold">experiences.</span>
        </h1>
        <Icon name="arrow-down" size="32" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
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
    border: 2px solid $grey-200;
    border-radius: 2.4rem;
    padding: 0 1.6rem;
    &::before,
    &::after {
      content: '';
      position: absolute;
      pointer-events: none;
    }
    &::before {
      width: 527px;
      height: 359px;
      top: -160px;
      left: -170px;
      background-image: url('@/assets/squiggle-1.svg');
    }
    &::after {
      width: 538px;
      height: 348px;
      bottom: -60px;
      right: -275px;
      background-image: url('@/assets/squiggle-2.svg');
    }
  }
  &__name {
    font-weight: 600;
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
    font-weight: 400;
    text-align: center;
    color: $grey-800;
    margin-bottom: 6.4rem;
  }
  &__bold {
    font-weight: 500;
    color: $blueberry-500;
  }
  .icon {
    color: $blueberry-500;
  }
  @include for-tablet-landscape-up {
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
</style>

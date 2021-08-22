<template>
  <div class="menu" :class="{ 'menu--open': $store.state.menuOpen }">
    <router-link class="menu__name" to="/">Marcus Billman</router-link>
    <div class="menu__body">
      <div class="menu__socials">
        <h3>Socials</h3>
        <a href="https://github.com/marcusbillman" class="menu__social-link"
          >GitHub</a
        >
        <a href="https://soundcloud.com/xfoxx37" class="menu__social-link"
          >SoundCloud</a
        >
        <a
          href="https://www.instagram.com/marcusbillman"
          class="menu__social-link"
          >Instagram</a
        >
        <a href="mailto:hello@marcusbillman.com" class="menu__social-link"
          >Email</a
        >
      </div>
      <div class="menu__links">
        <h3>Menu</h3>
        <router-link class="menu__link" to="/">Home</router-link>
        <router-link class="menu__link" to="/portfolio">Portfolio</router-link>
        <router-link class="menu__link" to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
  <div
    class="dim-overlay"
    :class="{ 'dim-overlay--open': $store.state.menuOpen }"
    @click="$store.commit('setMenuOpen', false)"
  ></div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.menu {
  position: fixed;
  width: calc(100% - 3.2rem);
  max-width: 60rem;
  right: 1.6rem;
  bottom: 8.8rem;
  display: grid;
  gap: 3.2rem;
  background: $white;
  border: 2px solid $grey-200;
  border-radius: 1.6rem;
  padding: 2.4rem;
  transform: translateX(calc(100% + 3.2rem));
  z-index: 101;
  &--open {
    transform: none;
  }
  a {
    display: block;
    text-decoration: none;
  }
  h3 {
    display: none;
    font-weight: 600;
    color: $grey-400;
    margin-bottom: 4.8rem;
  }
  &__body {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10rem;
  }
  &__socials {
    display: none;
  }
  &__social-link {
    margin-bottom: 0.8rem;
  }
  &__link {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }
  .router-link-exact-active:not(&__name) {
    font-weight: 500;
    color: $blueberry-500;
  }
  &__name {
    font-weight: 600;
  }
  @include for-tablet-portrait-up {
    top: 9.6rem;
    bottom: unset;
    padding: 6.4rem;
    h3 {
      display: block;
    }
    &__body {
      margin: 15rem 0;
    }
    &__socials {
      display: block;
    }
    &__link {
      font-size: 4rem;
      margin-bottom: 0.8rem;
    }
  }
  @include for-tablet-landscape-up {
    right: 3.2rem;
  }
}

.dim-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $white;
  opacity: 0;
  z-index: 100;
  pointer-events: none;
  &--open {
    opacity: 0.8;
    pointer-events: initial;
  }
}
</style>

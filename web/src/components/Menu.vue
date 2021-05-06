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
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.menu {
  position: fixed;
  top: 9.6rem;
  right: 3.2rem;
  width: 64rem;
  display: grid;
  gap: 6.4rem;
  background: $white;
  border: 2px solid $grey-200;
  border-radius: 1.6rem;
  padding: 6.4rem;
  transform: translateX(calc(100% + 3.2rem));
  z-index: 100;
  &--open {
    transform: none;
  }
  a {
    display: block;
    text-decoration: none;
  }
  h3 {
    font-weight: 600;
    color: $grey-400;
    margin-bottom: 4.8rem;
  }
  &__body {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10rem;
    margin-top: 10rem;
    margin-bottom: 15rem;
  }
  &__social-link {
    margin-bottom: 0.8rem;
  }
  &__link {
    font-size: 4rem;
    margin-bottom: 0.8rem;
  }
  .router-link-exact-active:not(&__name) {
    font-weight: 500;
    color: $blueberry-500;
  }
  &__name {
    font-weight: 600;
  }
}
</style>

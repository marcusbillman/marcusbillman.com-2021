<template>
  <header class="navbar">
    <router-link class="navbar__name navbar__link" to="/"
      >Marcus Billman</router-link
    >
    <div class="navbar__separator"></div>
    <nav class="navbar__links">
      <router-link class="navbar__link" to="/">Home</router-link>
      <router-link class="navbar__link" to="/portfolio">Portfolio</router-link>
      <router-link class="navbar__link" to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.navbar {
  position: absolute;
  display: none;
  top: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  background: $white;
  border-radius: 1000px;
  border: 2px solid $grey-200;
  padding: 1rem 3.2rem;
  z-index: 100;
  @media screen and (min-width: 900px) {
    display: flex;
  }
  &__separator {
    width: 2px;
    height: 2.4rem;
    background: $grey-200;
    border-radius: 1000px;
    margin: 0 4rem;
  }
  &__links {
    display: flex;
    gap: 2.4rem;
  }
  &__link {
    position: relative;
    font-weight: 500;
    text-decoration: none;
  }
  .router-link-active:not(&__name) {
    font-weight: 600;
    color: $blueberry-500;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: calc(-1rem - 2px);
      transform: translateX(-50%);
      width: 3.2rem;
      height: 2px;
      background: currentColor;
    }
  }
  &__name {
    width: max-content;
    font-weight: 600;
  }
}
</style>

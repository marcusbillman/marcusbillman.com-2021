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

<style lang="scss" scoped></style>

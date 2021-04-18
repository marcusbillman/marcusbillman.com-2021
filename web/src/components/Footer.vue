<template>
  <footer class="footer">
    <div class="splitter container footer__inner">
      <span class="footer__name">&copy; 2021 MARCUS BILLMAN</span>
      <div class="splitter footer__links">
        <a class="footer__link" href="https://github.com/marcusbillman"
          >GitHub</a
        >
        <a class="footer__link" href="https://soundcloud.com/xfoxx37"
          >SoundCloud</a
        >
        <a class="footer__link" href="https://www.instagram.com/marcusbillman"
          >Instagram</a
        >
        <a class="footer__link" href="mailto:hello@marcusbillman.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/colours" as *;

.footer {
  background: $white;
  margin-top: 20rem;
  padding: 4.8rem 0;
  &__inner {
    justify-content: space-between;
    --splitter-spacing: 3.2rem;
  }
  &__name {
    font-weight: 500;
  }
  &__link {
    display: block;
    --splitter-spacing: 1.6rem;
    @media screen and (min-width: 900px) {
      --splitter-spacing: 3.2rem;
    }
  }
}
</style>

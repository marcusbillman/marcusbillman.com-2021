<template>
  <a ref="skipLinkWrapper" href="#">
    <a href="#main" class="skip-link">Skip to main content</a>
  </a>
  <Navbar />
  <MenuButton />
  <Menu />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" id="main" />
    </keep-alive>
  </router-view>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
import MenuButton from '@/components/MenuButton.vue'
import Navbar from '@/components/Navbar.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

store.dispatch('fetchContent')

// Skip link

const skipLinkWrapper = ref(null)

watch(route, () => {
  skipLinkWrapper.value.focus()
})
</script>

<style lang="scss">
@use "@/styles/reset";
@use "@/styles/colours" as *;
@use "@/styles/layout";
@use "@/styles/typography";

body {
  background: $white;
}

#app {
  overflow-x: hidden;
}

.skip-link {
  position: absolute;
  top: 3.2rem;
  left: 3.2rem;
  &:not(:focus) {
    opacity: 0;
    pointer-events: none;
  }
}
</style>

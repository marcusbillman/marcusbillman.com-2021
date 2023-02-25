<template>
  <a ref="skipLinkWrapper" href="#">
    <a href="#main" class="skip-link">Skip to main content</a>
  </a>
  <TheNavbar />
  <MenuButton />
  <TheMenu />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" id="main" />
    </keep-alive>
  </router-view>
  <TheFooter />
</template>

<script setup>
import MenuButton from '@/components/MenuButton.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMenu from '@/components/TheMenu.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { inject } from '@vercel/analytics'

const route = useRoute()
const store = useStore()

store.dispatch('fetchContent')

// Audiences in Vercel Analytics
inject({
  mode: process.env.NODE_ENV
})

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
  cursor: url(/cursor-normal.svg) 0 0, auto;
}

a:hover,
button:hover {
  cursor: url(/cursor-pointer.svg) 12 0, auto !important;
}

::selection {
  color: white;
  background: $blueberry-500;
}

#app {
  overflow-x: hidden;
}

#main {
  min-height: 100vh;
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

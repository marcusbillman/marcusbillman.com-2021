<template>
  <header class="navbar" :class="variant ? `navbar--${variant}` : ''">
    <router-link
      v-if="variant === 'case-study'"
      class="navbar__close-link navbar__link"
      to="/portfolio"
    >
      <Icon name="close" />
      <span class="navbar__close-text">Close project</span>
    </router-link>
    <router-link
      v-else
      class="navbar__name navbar__link"
      to="/"
      @animationend.prevent="holdFinish"
      >Marcus Billman</router-link
    >
    <div class="navbar__separator"></div>
    <div
      v-if="variant === 'case-study' && projectCount"
      class="navbar__project-nav"
    >
      <router-link
        class="navbar__project"
        :to="`/portfolio/${prevProject.slug.current}`"
        ><Icon name="chevron-left"
      /></router-link>
      <span>{{ projectIndex + 1 }} / {{ projectCount }}</span>
      <router-link
        class="navbar__project"
        :to="`/portfolio/${nextProject.slug.current}`"
        ><Icon name="chevron-right"
      /></router-link>
    </div>
    <nav v-else class="navbar__links">
      <router-link class="navbar__link" to="/">Home</router-link>
      <router-link class="navbar__link" to="/portfolio">Portfolio</router-link>
      <router-link class="navbar__link" to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const variant = computed(() =>
  route.path.startsWith('/portfolio/') ? 'case-study' : ''
)

const projectCount = computed(() => store.getters.getProjectCount)

const projectIndex = computed(() =>
  store.getters.getIndexBySlug(route.params.slug)
)

const nextProject = computed(() =>
  store.getters.getNextProject(route.params.slug)
)

const prevProject = computed(() =>
  store.getters.getPrevProject(route.params.slug)
)

// Easter egg when clicking and holding navbar name
function holdFinish(e) {
  if (e.animationName.startsWith('holdName')) {
    window.location.href = 'https://gudweb.marcusbillman.com/'
  }
}
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.navbar {
  // General navbar styles
  position: absolute;
  display: none;
  align-items: center;
  left: 1.6rem;
  bottom: 1.9rem;
  width: max-content;
  height: 4.8rem;
  background: $white;
  border-radius: 1000px;
  border: 2px solid $grey-200;
  padding: 0 2rem;
  z-index: 100;
  @include for-tablet-portrait-up {
    display: flex;
    top: 3.2rem;
    left: 50%;
    bottom: unset;
    padding: 0 3.2rem;
    transform: translateX(-50%);
  }

  // Links (Right side)
  &__links {
    display: flex;
    gap: 3.2rem;
  }
  &__link {
    position: relative;
    font-weight: 500;
    text-decoration: none;
  }
  .router-link-active:not(&__name) {
    font-weight: 700;
    color: $blueberry-500;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: calc(-1rem - 2px);
      transform: translateX(-50%);
      width: 3.2rem;
      height: 2px;
      background: currentColor;
    }
  }

  // Name (left side)
  &__name {
    font-weight: 700;
    &:active {
      animation: holdName 3s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
    }
  }

  // Separator
  &__separator {
    width: 2px;
    height: 100%;
    background: $grey-200;
    border-radius: 1000px;
    margin: 0 1.6rem;
    @include for-tablet-portrait-up {
      margin: 0 3.2rem;
    }
  }

  // Case study variant (left & right sides)
  &--case-study {
    display: flex;
    position: fixed;
  }
  &__close-link,
  &__project-nav {
    display: grid;
    grid-auto-flow: column;
    gap: 0.8rem;
    font-weight: 500;
  }
  &__close-text {
    display: none;
    @include for-tablet-portrait-up {
      display: block;
    }
  }
}

@keyframes holdName {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
</style>

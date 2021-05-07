<template>
  <header class="navbar" :class="variant ? `navbar--${variant}` : ''">
    <router-link
      class="navbar__close navbar__link"
      to="/portfolio"
      v-if="variant === 'case-study'"
    >
      <Icon name="close" />
      Close project
    </router-link>
    <router-link class="navbar__name navbar__link" to="/" v-else
      >Marcus Billman</router-link
    >
    <div class="navbar__separator"></div>
    <div class="navbar__project-nav" v-if="variant === 'case-study'">
      <router-link
        class="navbar__project"
        :to="`/portfolio/${prevProject.slug.current}`"
        v-if="variant === 'case-study'"
        ><Icon name="chevron-left"
      /></router-link>
      <span>{{ projectIndex + 1 }} / {{ $store.state.projects.length }}</span>
      <router-link
        class="navbar__project"
        :to="`/portfolio/${nextProject.slug.current}`"
        v-if="variant === 'case-study'"
        ><Icon name="chevron-right"
      /></router-link>
    </div>
    <nav class="navbar__links" v-else>
      <router-link class="navbar__link" to="/">Home</router-link>
      <router-link class="navbar__link" to="/portfolio">Portfolio</router-link>
      <router-link class="navbar__link" to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const variant = computed(() =>
  route.path.startsWith("/portfolio/") ? "case-study" : ""
);

const projectIndex = computed(() =>
  store.getters.getIndexBySlug(route.params.slug)
);

const nextProject = computed(() =>
  store.getters.getNextProject(route.params.slug)
);

const prevProject = computed(() =>
  store.getters.getPrevProject(route.params.slug)
);
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
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
  @include for-tablet-landscape-up {
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

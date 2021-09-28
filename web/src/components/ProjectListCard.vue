<template>
  <article
    v-if="project"
    class="project"
    :class="{ 'project--compact': compact }"
  >
    <router-link
      class="project__link-wrapper"
      :to="`/portfolio/${project.slug.current}`"
    >
      <img
        class="project__image"
        :src="urlFor(project.mainImage)"
        :alt="project.title"
      />
      <div class="project__info" :data-side="infoSide">
        <div class="project__header">
          <h3 class="project__title">{{ project.title }}</h3>
          <BaseIcon name="arrow-right" />
        </div>
        <p class="project__description">{{ project.description }}</p>
        <ul class="project__roles">
          <li
            v-for="roleTag in project.roleTags"
            :key="roleTag._key"
            class="project__role"
          >
            <BaseTag :text="roleTag.name" />
          </li>
        </ul>
      </div>
    </router-link>
  </article>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import BaseTag from '@/components/BaseTag.vue'
import { defineProps } from 'vue'
import { urlFor } from '@/utilities/sanityImageUrl.js'

defineProps(['project', 'info-side', 'compact'])
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.project {
  // General project card styles
  position: relative;
  height: min-content;
  &__link-wrapper {
    text-decoration: none;
  }

  // Cover image
  &__image {
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 3;
    border-radius: 1.6rem;
    @supports not (aspect-ratio: 1 / 1) {
      height: 46rem;
      @include for-tablet-landscape-up {
        height: 70rem;
      }
    }
  }

  // Project info (floating box on desktop)
  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 2.4rem;
    @include for-tablet-landscape-up {
      position: absolute;
      max-width: 100%;
      left: -3.2rem;
      bottom: -3.2rem;
      background: $white;
      border: 2px solid $grey-200;
      border-radius: 1.6rem;
      margin-top: 0;
      padding: 3.2rem;
    }
    @include for-desktop-up {
      &[data-side='right'] {
        left: unset;
        right: -3.2rem;
      }
    }
  }
  &__header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: $blueberry-500;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 700;
  }
  &__description {
    font-size: 1.6rem;
  }
  &__roles {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>

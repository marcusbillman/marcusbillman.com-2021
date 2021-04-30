<template>
  <article
    class="project"
    :class="{ 'project--compact': compact }"
    v-if="project"
  >
    <img
      class="project__image"
      :src="urlFor(project.mainImage)"
      :alt="project.title"
    />
    <div class="project__info" :data-side="infoSide">
      <router-link
        class="project__link"
        :to="`/portfolio/${project.slug.current}`"
      >
        <h3 class="project__title">{{ project.title }}</h3>
        <Icon name="arrow-right" />
      </router-link>
      <ul class="project__roles">
        <li
          class="project__role"
          v-for="roleTag in project.roleTags"
          :key="roleTag._key"
        >
          <Tag :text="roleTag.name" />
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
import Tag from "@/components/Tag.vue";
import { defineProps } from "vue";
import sanityClient from "@/sanityConfig";
import imageUrlBuilder from "@sanity/image-url";

defineProps(["project", "info-side", "compact"]);

const imageBuilder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return imageBuilder.image(source);
}
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.project {
  position: relative;
  &__image {
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    aspect-ratio: 576 / 700;
    border-radius: 1.6rem;
    margin-bottom: 2.4rem;
    @supports not (aspect-ratio: 1 / 1) {
      height: 46rem;
      @include for-tablet-landscape-up {
        height: 70rem;
      }
    }
  }
  &__link {
    display: flex;
    align-items: center;
    color: $blueberry-500;
    text-decoration: none;
    margin-bottom: 1.6rem;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 500;
    text-transform: unset;
    letter-spacing: unset;
    margin-right: 0.8rem;
    @include for-tablet-landscape-up {
      font-size: 3.2rem;
    }
  }
  .icon {
    @include for-tablet-landscape-up {
      transform: scale(calc(32 / 24));
      margin-left: 1.2rem;
    }
  }
  &__roles {
    display: flex;
    flex-wrap: wrap;
    * {
      margin-right: 1rem;
    }
  }

  &:not(&--compact) {
    .project__info {
      @include for-tablet-landscape-up {
        position: absolute;
        min-width: 80%;
        bottom: 0;
        background: $white;
        border-radius: 1.6rem;
        border: 2px solid $grey-200;
        padding: 3.2rem;
        &[data-side="left"] {
          left: 0;
          transform: translate(-3.2rem, 3.2rem);
        }
        &[data-side="right"] {
          right: 0;
          transform: translate(3.2rem, 3.2rem);
        }
      }
    }
  }
}
</style>

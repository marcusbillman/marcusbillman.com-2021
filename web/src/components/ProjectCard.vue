<template>
  <article class="project" v-if="project">
    <img
      class="project__image"
      :src="urlFor(project.mainImage)"
      :alt="project.title"
    />
    <div class="flow project__info">
      <router-link class="project__link" to="/portfolio">
        <h3 class="project__title">{{ project.title }}</h3>
        <i class="gg-arrow-right"></i>
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
import Tag from "@/components/Tag.vue";
import { defineProps } from "vue";
import sanityClient from "@/sanityConfig";
import imageUrlBuilder from "@sanity/image-url";

defineProps(["project"]);

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
      transform: rotate(10deg);
      height: 46rem;
      @include for-tablet-landscape-up {
        height: 70rem;
      }
    }
  }
  &__info {
    min-width: 80%;
    @include for-tablet-landscape-up {
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-3.2rem, 3.2rem);
      background: $white;
      border-radius: 1.6rem;
      border: 2px solid $grey-200;
      padding: 3.2rem;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    color: $blueberry-500;
    text-decoration: none;
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
  i {
    @include for-tablet-landscape-up {
      --ggs: calc(32 / 22);
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
}
</style>

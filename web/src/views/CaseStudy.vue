<template>
  <div class="page">
    <section v-if="project" class="container header">
      <h1 class="header__title">{{ project.title }}</h1>
      <p class="header__description">{{ project.description }}</p>
    </section>
    <section v-if="project" class="container container--wide main-image">
      <img :src="urlFor(project.mainImage)" :alt="project.title" />
    </section>
    <section v-if="project" class="container content">
      <div class="flow body">
        <SanityBlocks :blocks="project.body" />
      </div>
      <div>
        <div class="data">
          <div class="data__group">
            <h3>My roles</h3>
            <ul class="data__list">
              <li v-for="roleTag in project.roleTags" :key="roleTag._key">
                <Tag :text="roleTag.name" />
              </li>
            </ul>
          </div>
          <div class="data__group">
            <h3>Technologies</h3>
            <ul class="data__list">
              <li v-for="techTag in project.techTags" :key="techTag._key">
                <Tag :text="techTag.name" />
              </li>
            </ul>
          </div>
          <div class="data__group">
            <h3>Date</h3>
            <p class="data__date">{{ project.date }}</p>
          </div>
        </div>
        <div class="links">
          <Button :href="project.primaryLink.url" icon="arrow-top-right">{{
            project.primaryLink.text
          }}</Button>
          <Button
            :href="project.secondaryLink.url"
            icon="arrow-top-right"
            variant="secondary"
            >{{ project.secondaryLink.text }}</Button
          >
        </div>
      </div>
    </section>
    <section v-if="project" class="container container--wide additional-images">
      <img
        v-for="image in project.additionalImages"
        :key="image._key"
        :src="urlFor(image)"
        :alt="image.caption"
      />
    </section>
    <section class="container next-project">
      <BigLink
        v-if="nextProject"
        :href="`/portfolio/${nextProject.slug.current}`"
        icon="arrow-right"
        >Next project</BigLink
      >
    </section>
  </div>
</template>

<script setup>
import BigLink from '@/components/BigLink.vue'
import Button from '@/components/Button.vue'
import Tag from '@/components/Tag.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import sanityClient from '@/utilities/sanityConfig'
import imageUrlBuilder from '@sanity/image-url'

const route = useRoute()
const store = useStore()

const project = computed(() =>
  store.getters.getProjectBySlug(route.params.slug)
)

const imageBuilder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return imageBuilder.image(source)
}

const nextProject = computed(() =>
  store.getters.getNextProject(route.params.slug)
)
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

img {
  object-fit: cover;
  border-radius: 1.6rem;
}

.header {
  h1 {
    font-size: clamp(4rem, 6vw, 7.2rem);
    font-weight: 500;
    color: $blueberry-500;
    margin-bottom: 2.4rem;
  }
}

.header__description,
.body {
  @include for-tablet-landscape-up {
    font-size: 2.4rem;
  }
}

.main-image {
  margin: 6.4rem 0;
  @include for-tablet-landscape-up {
    margin: 15rem 0;
  }
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6.4rem 4.8rem;
  margin-bottom: 15rem;
  @include for-desktop-up {
    grid-template-columns: repeat(2, 1fr);
  }
}

.data {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 3.2rem 6.4rem;
  &__group {
    display: grid;
    gap: 1.6rem;
    height: max-content;
  }
  &__list {
    display: grid;
    gap: 1rem;
  }
}

.links {
  display: grid;
  gap: 2rem;
  margin-top: 4.8rem;
  @include for-tablet-portrait-up {
    grid-template-columns: repeat(2, max-content);
  }
}

.additional-images {
  display: grid;
  grid-template-columns: repeat(1, minmax(20rem, 1fr));
  gap: 6.4rem 4.8rem;
  margin-bottom: 20rem;
  @include for-tablet-landscape-up {
    grid-template-columns: repeat(2, minmax(20rem, 1fr));
    img {
      &:nth-child(even) {
        transform: translateY(6.4rem);
      }
    }
  }
}
</style>

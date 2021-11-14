<template>
  <div class="page">
    <TheHeader
      v-if="project"
      :title="project.title"
      :description="project.description"
      transparent="true"
    />
    <div class="sections">
      <section v-if="project" class="main-image section">
        <BlockImage :asset="project.mainImage" :alt="project.title" />
      </section>
      <section v-if="project" class="body section">
        <SanityBlocks :blocks="project.body" :serializers="serializers" />
      </section>
      <section v-if="project?.additionalImages" class="additional-images">
        <div class="additional-images__container container container--wide">
          <img
            v-for="image in project.additionalImages"
            :key="image._key"
            class="additional-images__img"
            :src="urlFor(image)"
            :alt="image.caption"
          />
        </div>
      </section>
      <section v-if="project" class="info section">
        <div class="info__container container">
          <div class="info__box">
            <div class="info__data">
              <div v-if="project.roleTags.length" class="info__group">
                <h3>My roles</h3>
                <ul class="info__list">
                  <li v-for="roleTag in project.roleTags" :key="roleTag._key">
                    <BaseTag :text="roleTag.name" />
                  </li>
                </ul>
              </div>
              <div v-if="project.techTags.length" class="info__group">
                <h3>Built with</h3>
                <ul class="info__list">
                  <li v-for="techTag in project.techTags" :key="techTag._key">
                    <BaseTag :text="techTag.name" />
                  </li>
                </ul>
              </div>
              <div v-if="project.date" class="info__group">
                <h3>Project date</h3>
                <p class="info__date">{{ project.date }}</p>
              </div>
            </div>
            <div class="info__links">
              <BaseButton
                v-if="project.primaryLink.url && project.primaryLink.text"
                :href="project.primaryLink.url"
                icon="arrow-top-right"
                >{{ project.primaryLink.text }}</BaseButton
              >
              <BaseButton
                v-if="project.secondaryLink.url && project.secondaryLink.text"
                :href="project.secondaryLink.url"
                icon="arrow-top-right"
                variant="secondary"
                >{{ project.secondaryLink.text }}</BaseButton
              >
            </div>
          </div>
        </div>
      </section>
      <section class="next-project section">
        <BaseButton
          v-if="nextProject"
          :href="`/portfolio/${nextProject.slug.current}`"
          icon="arrow-right"
          >Next project</BaseButton
        >
      </section>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseTag from '@/components/BaseTag.vue'
import BlockImage from '@/components/BlockImage.vue'
import TheHeader from '@/components/TheHeader.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { urlFor } from '@/utilities/sanityImageUrl.js'

const route = useRoute()
const store = useStore()

const project = computed(() =>
  store.getters.getProjectBySlug(route.params.slug)
)

const nextProject = computed(() =>
  store.getters.getNextProject(route.params.slug)
)

const serializers = {
  types: {
    image: BlockImage
  }
}
</script>

<style lang="scss">
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.main-image {
  position: relative;
  // Dotted background to replace the one that's normally in the page header
  &::after {
    content: '';
    position: absolute;
    bottom: 66%;
    width: 100%;
    height: 200vh;
    @include dotted-bg;
    z-index: -1;
  }
}

.body {
  p {
    padding: 0 1.6rem;
    margin: 0 auto;
    & + p {
      margin-top: 3.2rem;
    }
  }
  .image-block:not(:last-child) {
    margin: clamp(10rem, 20vh, 20rem) 0;
  }
}

.info {
  &__box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6.4rem;
    @include for-tablet-landscape-up {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
      border: 2px solid $grey-200;
      border-radius: 1.6rem;
      padding: 3.2rem;
    }
  }
  &__data {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3.2rem 6.4rem;
    flex-grow: 1;
  }
  &__group {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__date {
    line-height: 1;
  }
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    @include for-tablet-landscape-up {
      align-items: flex-end;
      width: auto;
    }
  }
}

.additional-images {
  &__container {
    display: grid;
    grid-template-columns: repeat(1, minmax(20rem, 1fr));
    gap: 6.4rem 4.8rem;
    @include for-tablet-landscape-up {
      grid-template-columns: repeat(2, minmax(20rem, 1fr));
    }
  }
  &__img {
    position: relative;
    object-fit: cover;
    border-radius: 1.6rem;
    @include for-tablet-landscape-up {
      &:nth-child(even) {
        top: 10rem;
        &:last-child {
          margin-bottom: 10rem;
        }
      }
    }
  }
}

.next-project {
  display: grid;
  place-items: center;
}
</style>

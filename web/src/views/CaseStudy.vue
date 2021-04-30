<template>
  <div class="page">
    <section class="container header" v-if="project">
      <h1 class="header__title">{{ project.title }}</h1>
      <p class="header__description">Description should go here</p>
    </section>
    <section class="container container--wide main-image" v-if="project">
      <img :src="urlFor(project.mainImage)" :alt="project.title" />
    </section>
    <section class="container content" v-if="project">
      <div class="splitter">
        <div class="flow body">
          <SanityBlocks :blocks="project.body" />
        </div>
        <div>
          <div class="splitter data">
            <div class="data__roles">
              <h3>My roles</h3>
              <ul class="data__roles-list">
                <li v-for="roleTag in project.roleTags" :key="roleTag._key">
                  <Tag :text="roleTag.name" />
                </li>
              </ul>
            </div>
            <div class="data__technologies">
              <h3>Technologies</h3>
              <ul class="data__roles-list">
                <li v-for="techTag in project.techTags" :key="techTag._key">
                  <Tag :text="techTag.name" />
                </li>
              </ul>
            </div>
            <div class="data__date">
              <h3>Date</h3>
              <p>{{ project.date }}</p>
            </div>
          </div>
          <div class="splitter links">
            <Button :href="project.primaryLink.url" icon="arrow-top-right">{{
              project.primaryLink.text
            }}</Button>
            <Button :href="project.secondaryLink.url" icon="arrow-top-right">{{
              project.secondaryLink.text
            }}</Button>
          </div>
        </div>
      </div>
    </section>
    <section class="container container--wide additional-images" v-if="project">
      <img
        v-for="image in project.additionalImages"
        :key="image._key"
        :src="urlFor(image)"
        :alt="image.caption"
      />
    </section>
    <section class="container next-project">
      <BigLink href="/portfolio" icon="arrow-right">Next project</BigLink>
    </section>
  </div>
</template>

<script setup>
import BigLink from "@/components/BigLink.vue";
import Button from "@/components/Button.vue";
import Tag from "@/components/Tag.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import sanityClient from "@/sanityConfig";
import imageUrlBuilder from "@sanity/image-url";

const route = useRoute();
const store = useStore();

const project = computed(() =>
  store.getters.getProjectBySlug(route.params.slug)
);

const imageBuilder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return imageBuilder.image(source);
}
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.header {
  margin-bottom: 10rem;
  h1 {
    font-size: 7.2rem;
    font-weight: 500;
    color: $blueberry-500;
    margin-bottom: 3.2rem;
  }
  &__description {
    font-size: 2.4rem;
  }
}

.content {
  margin-top: 15rem;
  margin-bottom: 15rem;
  --spacing: 2.4rem;
  --splitter-spacing: 4.8rem;
}

.body {
  font-size: 2.4rem;
}

.links {
  width: max-content;
  margin-top: 4.8rem;
  --splitter-spacing: 2rem;
}

.additional-images {
  > * + * {
    margin-top: 6.4rem;
  }
  @include for-tablet-landscape-up {
    display: flex;
    flex-wrap: wrap;
    img {
      // aspect-ratio: 16 / 9;
      max-width: calc(50% - 2.4rem);
      &:nth-child(even) {
        transform: translateY(6.4rem);
        margin-top: 0;
        margin-left: 4.8rem;
      }
    }
  }
}

.next-project {
  display: flex;
  justify-content: center;
  margin-top: 20rem;
}

h3 {
  margin-bottom: 1.6rem;
}

img {
  object-fit: cover;
  border-radius: 1.6rem;
}

li {
  margin-bottom: 1rem;
}
</style>

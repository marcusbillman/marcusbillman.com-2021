<template>
  <div class="page">
    <div class="container" v-if="project">
      <h1>{{ project.title }}</h1>
      <p>Description should go here</p>
    </div>
    <div class="wide-container">
      <img :src="urlFor(project.mainImage)" :alt="project.title" />
    </div>
    <div class="container">
      <div class="splitter">
        <div>
          <SanityBlocks :blocks="project.body" />
        </div>
        <div>
          <div class="data">
            <div class="data__roles">
              <h3>My roles</h3>
              <ul>
                <li v-for="roleTag in project.roleTags" :key="roleTag._key">
                  <Tag :text="roleTag.name" />
                </li>
              </ul>
            </div>
            <div class="data__technologies">
              <h3>Technologies</h3>
              <ul>
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
          <div class="links">
            <Button :href="project.primaryLink.url">{{
              project.primaryLink.text
            }}</Button>
            <Button :href="project.secondaryLink.url">{{
              project.secondaryLink.text
            }}</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="wide-container">
      <div class="additional-images">
        <img
          v-for="image in project.additionalImages"
          :key="image._key"
          :src="urlFor(image)"
          :alt="image.caption"
        />
      </div>
    </div>
    <BigLink href="/portfolio" icon="arrow-right">More work</BigLink>
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

<style lang="scss" scoped></style>

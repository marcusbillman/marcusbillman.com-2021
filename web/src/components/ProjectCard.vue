<template>
  <article class="project">
    <img :src="urlFor(project.mainImage)" :alt="project.title" />
    <p>{{ project.title }}</p>
    <Tag
      v-for="roleTag in project.roleTags"
      :key="roleTag._key"
      :text="roleTag.name"
    />
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

<style lang="scss" scoped></style>

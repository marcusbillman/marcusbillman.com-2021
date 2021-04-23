<template>
  <article class="project" v-if="project">
    <img
      class="project__image"
      :src="urlFor(project.mainImage)"
      :alt="project.title"
    />
    <div class="project__info">
      <router-link class="project__link" to="/portfolio">
        <h3 class="project__title">{{ project.title }}</h3>
        <i class="gg-arrow-right"></i>
      </router-link>
      <ul class="project__roles">
        <li class="project__role">
          <Tag
            v-for="roleTag in project.roleTags"
            :key="roleTag._key"
            :text="roleTag.name"
          />
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

<style lang="scss" scoped></style>

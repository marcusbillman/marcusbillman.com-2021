<template>
  <Navbar />
  <MenuButton />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <Footer />
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import MenuButton from "@/components/MenuButton.vue";
import Navbar from "@/components/Navbar.vue";
import sanityClient from "@/utilities/sanityConfig";
import { useStore } from "vuex";

const store = useStore();

const query = `*[ _type == 'project' ]{
    ...,
    'roleTags': *[ _type == 'roleTag' && _id in ^.roleTags[]._ref ],
    'techTags': *[ _type == 'techTag' && _id in ^.techTags[]._ref ]
  }`;

sanityClient.fetch(query).then((result) => {
  store.commit("setProjects", result);
  console.log(result);
});
</script>

<style lang="scss">
@use "@/styles/reset";
@use "@/styles/colours" as *;
@use "@/styles/layout";
@use "@/styles/typography";

body {
  background: $white;
  background-image: radial-gradient($grey-100 2px, transparent 0);
  background-size: 32px 32px;
  background-attachment: fixed;
}

#app {
  overflow-x: hidden;
}
</style>

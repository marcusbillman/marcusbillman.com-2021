<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import sanityClient from "@/sanityConfig";
import { useStore } from "vuex";
import "css.gg/icons/all.css";

const store = useStore();

sanityClient.fetch('*[_type == "project"]').then((result) => {
  store.commit("setProjects", result);
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

<template>
  <Home />
</template>

<script setup>
import Home from "@/views/Home.vue";
import "css.gg/icons/all.css";
</script>

<style lang="scss">
@use "@/styles/reset";
@use "@/styles/colours";
@use "@/styles/layout";
@use "@/styles/typography";

body {
  background: colours.$white;
  background-image: radial-gradient(colours.$grey-100 2px, transparent 0);
  background-size: 32px 32px;
  background-attachment: fixed;
}
</style>

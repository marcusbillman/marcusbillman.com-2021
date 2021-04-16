<template>
  <Home />
</template>

<script setup>
import Home from "@/views/Home.vue";
import "css.gg/icons/all.css";
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
</style>

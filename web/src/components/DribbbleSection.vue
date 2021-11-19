<template>
  <section class="dribbble">
    <article v-for="shot in shots" :key="shot.id">
      <img :src="shot.images.hidpi" :alt="shot.title" />
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const shots = ref([])

const accessToken =
  '4a1d89068492a75650622196e3d34de0e1f6c6c087603d22b1dd6928319849b3'
const shotCount = 5
const url = `https://api.dribbble.com/v2/user/shots?access_token=${accessToken}&per_page=${shotCount}`

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    shots.value = data
  })
</script>

<style lang="scss" scoped></style>

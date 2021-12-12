<template>
  <div :class="`illustration illustration--${name}`" aria-hidden="true">
    <AudioFile v-if="name === 'audio-file'" />
    <BezierCurve v-else-if="name === 'bezier-curve'" />
    <Browser v-else-if="name === 'browser'" />
    <ButtonClick v-else-if="name === 'button-click'" />
    <Cable v-else-if="name === 'cable'" />
    <CodeBlock v-else-if="name === 'code-block'" />
    <Daw v-else-if="name === 'daw'" />
    <Dropdown v-else-if="name === 'dropdown'" />
    <Knob v-else-if="name === 'knob'" />
    <Metronome v-else-if="name === 'metronome'" />
    <Phone v-else-if="name === 'phone'" />
    <Piano v-else-if="name === 'piano'" />
    <Switch v-else-if="name === 'switch'" />
  </div>
</template>

<script setup>
import AudioFile from '@/assets/illustration-audio-file.svg'
import BezierCurve from '@/assets/illustration-bezier-curve.svg'
import Browser from '@/assets/illustration-browser.svg'
import ButtonClick from '@/assets/illustration-button-click.svg'
import Cable from '@/assets/illustration-cable.svg'
import CodeBlock from '@/assets/illustration-code-block.svg'
import Daw from '@/assets/illustration-daw.svg'
import Dropdown from '@/assets/illustration-dropdown.svg'
import Knob from '@/assets/illustration-knob.svg'
import Metronome from '@/assets/illustration-metronome.svg'
import Phone from '@/assets/illustration-phone.svg'
import Piano from '@/assets/illustration-piano.svg'
import Switch from '@/assets/illustration-switch.svg'
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>

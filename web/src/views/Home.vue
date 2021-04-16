<template>
  <div class="page">
    <main class="dotted-container">
      <section class="hero">
        <h1>My art is arranging links and shapes into experiences.</h1>
        <i class="gg-arrow-down"></i>
      </section>
      <section class="bio">
        <p class="bio__content">
          I’m Marcus. I design websites and interfaces, and develop experiences
          for the web. I’m also a hobbyist music producer.
        </p>
      </section>
      <img
        v-svg-inline
        class="illustration"
        src="@/assets/illustration-design.svg"
        alt="Design illustration"
      />
      <section class="design">
        <div class="section-header">
          <span class="section-header__number">01</span>
          <span class="section-header__title">WEB & DESIGN</span>
        </div>
        <div class="container">
          <div class="design__info">
            <div class="design__left">
              <h2>The web is my oyster</h2>
              <p>
                Few things excite me as much as clean, smooth websites that just
                feel spot-on. My designs focus on being expressive, helpful and
                accessible.
              </p>
            </div>
            <div class="design__right">
              <h3>Tools I like using</h3>
              <div class="design__tools">
                <Tag text="Vue 3" />
                <Tag text="SCSS" />
                <Tag text="GSAP" />
                <Tag text="Git" />
                <Tag text="Netlify" />
                <Tag text="Firebase" />
                <Tag text="Figma" />
                <Tag text="Node.js" />
              </div>
            </div>
          </div>
          <div class="design__projects">
            <!-- Featured projects go here -->
            <BigLink href="/portfolio" icon="arrow-right">More work</BigLink>
          </div>
        </div>
      </section>
      <img
        v-svg-inline
        class="illustration"
        src="@/assets/illustration-music.svg"
        alt="Music illustration"
      />
      <section class="music">
        <div class="section-header">
          <span class="section-header__number">02</span>
          <span class="section-header__title">MUSIC</span>
        </div>
        <div class="container">
          <h2>Beats and jams</h2>
          <p>
            During my day, I subconsciously tap drum beats on tables and hum
            cheesy melodies. My free creative outlet is electronic music.
          </p>
          <Button href="https://soundcloud.com/xfoxx37"
            >Listen on SoundCloud</Button
          >
        </div>
      </section>
      <section class="socials">
        <div class="socials__content">
          <LinkCard
            title="GitHub"
            desc="marcusbillman"
            href="https://github.com/marcusbillman"
            icon="code-slash"
          ></LinkCard>
          <LinkCard
            title="SoundCloud"
            desc="Marcus Billman"
            href="https://soundcloud.com/xfoxx37"
            icon="music"
          ></LinkCard>
          <LinkCard
            title="Instagram"
            desc="marcusbillman"
            href="https://www.instagram.com/marcusbillman"
            icon="instagram"
          ></LinkCard>
        </div>
      </section>
      <section class="contact">
        <h2>Communication is key</h2>
        <p>
          Want to talk linear gradients or pentatonic scales (or just say hi)?
          You’re welcome to drop a line or two.
        </p>
        <Button href="/contact">Contact me</Button>
      </section>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

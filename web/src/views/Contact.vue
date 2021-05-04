<template>
  <div class="page">
    <div class="container">
      <h1>Contact</h1>
      <div class="contact">
        <div>
          <p>
            You can leave me a message through this fancy form. Or if you
            prefer, you may also
            <a href="mailto:hello@marcusbillman.com">email me directly.</a>
          </p>
          <form class="form" method="post">
            <div class="form__fields">
              <div class="form__field">
                <label for="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="form__field">
                <label for="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div class="form__field">
                <label for="message">Message</label>
                <textarea name="message" id="message" />
              </div>
            </div>
            <button type="submit">Send message</button>
          </form>
        </div>
        <section class="socials">
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
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkCard from "@/components/LinkCard.vue";
</script>

<style lang="scss" scoped></style>

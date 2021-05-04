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
            <Button type="submit">Send message</Button>
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
import Button from "@/components/Button.vue";
import LinkCard from "@/components/LinkCard.vue";
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

h1 {
  font-size: 4rem;
  color: $blueberry-500;
  margin-bottom: 4.8rem;
  @include for-tablet-landscape-up {
    display: none;
  }
}

p {
  font-size: 2.4rem;
  a {
    color: $blueberry-500;
  }
}

.page {
  display: grid;
}

.contact {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6.4rem 4.8rem;
  @include for-tablet-landscape-up {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form {
  display: grid;
  gap: 3.2rem;
  margin-top: 6.4rem;
  &__fields {
    display: grid;
    gap: 2.4rem;
  }
  &__field {
    display: block;
  }
}

label {
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  background: $white;
  border: 2px solid $grey-200;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  margin-top: 0.4rem;
}

textarea {
  min-height: 20rem;
  max-height: 100vh;
  resize: vertical;
}

.button {
  @include for-tablet-portrait-up {
    width: max-content;
  }
}

.socials {
  display: none;
  @include for-tablet-landscape-up {
    display: grid;
    align-content: start;
    justify-items: end;
    gap: 2.4rem;
  }
}
</style>

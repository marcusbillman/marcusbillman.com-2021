<template>
  <div class="page">
    <TheHeader title="Contact" />
    <div class="container">
      <div class="sections">
        <section class="contact-methods section">
          <div class="contact-methods__email-wrapper">
            <p class="contact-methods__heading">
              Hej! You can email me directly...
            </p>
            <EmailCard />
          </div>
          <div class="contact-methods__form-wrapper">
            <p class="contact-methods__heading">...or use this nifty form.</p>
            <form class="form" method="post" name="contact" netlify>
              <input type="hidden" name="form-name" value="contact" />
              <div class="form__fields">
                <div class="form__field">
                  <label for="name">Your name</label>
                  <input id="name" type="text" name="name" />
                </div>
                <div class="form__field">
                  <label for="email">Your email</label>
                  <input id="email" type="email" name="email" />
                </div>
                <div class="form__field">
                  <label for="message">Message</label>
                  <textarea id="message" name="message"></textarea>
                </div>
              </div>
              <BaseButton type="submit">Send message</BaseButton>
            </form>
          </div>
        </section>
        <SocialsSection force-vertical="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import EmailCard from '@/components/EmailCard.vue'
import LinkCard from '@/components/LinkCard.vue'
import SocialsSection from '@/components/SocialsSection.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.sections {
  @include for-tablet-landscape-up {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 6.4rem 4.8rem;
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  @include for-tablet-landscape-up {
    max-width: 60rem;
  }
  &__heading {
    margin-bottom: 3.2rem;
  }
  &__socials {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  &__fields {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2.4rem;
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
}
</style>

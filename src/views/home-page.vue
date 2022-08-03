<template>
  <section class="home-page">
    <div class="home-page-container">
      <hero />
      <content />
      <fast-sign-up />
    </div>
  </section>
</template>
<script>
import hero from '../components/hero-cmp.vue'
import content from '../components/content-cmp.vue'
import fastSignUp from '../components/fast-sign-up-cmp.vue'
export default {
  name: 'home-page',
  components: {
    hero,
    content,
    fastSignUp,
  },
}
</script>

<template>
  <section class="content">
    <div class="content-container">
      <content-top />
      <content-center />
      <content-bottom />
    </div>
  </section>
</template>
<script>
import contentTop from '../components/content-top-cmp.vue'
import contentCenter from '../components/content-center-cmp.vue'
import contentBottom from '../components/content-bottom-cmp.vue'
export default {
  name: 'content',
  components: {
    contentTop,
    contentCenter,
    contentBottom,
  },
}
</script>

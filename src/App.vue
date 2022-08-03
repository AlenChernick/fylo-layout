<template>
  <section class="app-container main-layout">
    <app-header />
    <router-view />
    <app-footer class="full" />
  </section>
</template>
<script>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'
export default {
  name: 'app',
  components: {
    appHeader,
    appFooter,
  },
}
</script>

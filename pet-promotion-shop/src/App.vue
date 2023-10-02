<script>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: "landing-page",
  components: {
   FooterComponent,
   RouterView
  }
}
</script>

<template>
  <RouterView />
  <FooterComponent />
</template>

<style scoped>

</style>

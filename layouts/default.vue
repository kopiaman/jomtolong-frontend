<template>
  <div>
    <TopNav />

    <div class="container position-relative">
      <Loading v-if="is_loading" />
      <nuxt />
    </div>
    <!-- footer -->
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from '../components/shared/FooterNav.vue'
import Loading from '../components/shared/Loading.vue'
import TopNav from '../components/shared/TopNav.vue'
import { mapState } from 'vuex'

export default {
  components: { TopNav, FooterNav, Loading },
  computed: {
    ...mapState({
      is_loading: (state) => state.is_loading,
    }),
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap');

html {
  font-family: 'Comfortaa', cursive;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
  @apply min-h-screen  mx-auto p-5;
} */
</style>

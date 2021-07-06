<template>
  <div>
    <div class="container">
      <div
        class="
          mb-3
          flex
          justify-between
          items-center
          bg-gray-200
          p-2
          border-radius-10
        "
      >
        <div class="lg:w-2/3">
          <img
            src="/img/logo.png"
            class="h-12 clickable"
            @click="$router.push('/')"
          />
        </div>

        <div class="flex hide-mobile">
          <div
            class="
              w-1/2
              bg-green-200
              border
              rounded-lg
              border-green-200
              p-2
              px-4
              inline-flex
              items-center
              m-1
              clickable
            "
            @click="$router.push('/pemohon/borang')"
          >
            <img src="/img/icon-flag-me.png" class="h-12 mr-3" />
            <div class="text-xs font-bold text-left">
              Mohon Bantuan <br />(diri sendiri/ orang lain)
            </div>
          </div>
          <div
            class="
              w-1/2
              bg-green-500
              border
              rounded-lg
              border-green-200
              p-2
              px-4
              inline-flex
              items-center
              m-1
              clickable
            "
            @click="$router.push('/pusatbantuan/borang')"
          >
            <div class="text-xs font-bold text-left w-2/3">
              Daftar Pusat Bantuan/ Food Bank di kawasan anda
            </div>
            <img src="/img/icon-ngo.png" class="h-12 ml-3" />
          </div>
        </div>
      </div>
      <nuxt />
    </div>
    <!-- footer -->
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from '../components/shared/FooterNav.vue'

export default {
  components: { FooterNav },
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

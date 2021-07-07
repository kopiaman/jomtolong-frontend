<template>
  <div>
    <div class="mb-3 flex justify-between items-center bg-gray-200 p-2">
      <div class="px-5 flex items-center justify-between w-full">
        <div class="lg:w-2/3">
          <img
            src="/img/logo.png"
            class="h-12 clickable"
            @click="$router.push('/')"
          />
        </div>

        <!-- quick button -->
        <div class="w-1/3 flex hide-mobile">
          <div
            class="bg-indigo-600 button-big"
            @click="$router.push('/pemohon/borang')"
            v-if="$route.path == '/pemohon'"
          >
            <div class="mr-3">
              <img src="/img/icon-flag-me.png" class="h-10" />
            </div>
            <div class="text-xs font-bold text-left text-white">
              Mohon Bantuan <br />(diri sendiri/ orang lain)
            </div>
          </div>

          <div
            class="bg-green-500 button-big"
            @click="$router.push('/pusatbantuan/borang')"
            v-if="$route.path == '/pusatbantuan'"
          >
            <div class="text-xs font-bold text-left w-2/3">
              Daftar Pusat Bantuan/ Food Bank di kawasan anda
            </div>
            <img src="/img/icon-ngo.png" class="h-10 ml-3" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
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

<template>
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
</template>

<script>
export default {}
</script>

<style>
</style>
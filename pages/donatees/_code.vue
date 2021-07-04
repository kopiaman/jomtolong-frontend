<template>
  <div>
    <div class="flex items-center pb-3">
      <div class="w-5 mr-2 clickable" @click="$router.back()">
        <img src="/svg/left-arrow.svg" />
      </div>
      <h1 class="text-xl font-bold">Maklumat Penerima</h1>
    </div>

    <div class="bg-gray-300 h-56 flex flex-center p-5 leading-loose -mx-5">
      Saya telah hilang pekerjaan sejak PKP 1.0. Tidak cukup pembelanjaan untuk
      menyara anak
    </div>

    <div
      class="
        position-relative
        bg-white
        border
        rounded-lg
        border-gray-400
        p-4
        m-1
      "
      style="top: -20px"
    >
      <div
        class="
          bg-green-300
          position-absolute position-top-right
          mt-2
          mr-2
          px-3
          py-1
          text-xs
          border-radius-5
        "
      >
        SELESAI
      </div>

      <p class="text-xl font-bold text-left">NUR931</p>

      <div class="flex mb-2">
        <div class="w-4 mr-2">
          <img class="" src="/img/icon-location.png" />
        </div>
        <p class="text-xs">Puchong ~ 2km</p>
      </div>

      <div class="flex">
        <div class="w-4 mr-2">
          <img class="" src="/img/icon-help.png" />
        </div>
        <p class="text-xs">Keperluan asas, makanan</p>
      </div>

      <div
        class="
          w-full
          bg-green-200
          border
          rounded-lg
          border-green-200
          p-3
          flex
          justify-center
          text-center
          m-1
          mt-5
          px-5
        "
      >
        <img src="/img/icon-call.png" class="h-5 mr-3" />
        <div class="text-sm text-left">Call</div>
      </div>

      <div
        class="
          w-full
          bg-white
          border
          rounded-lg
          border-green-200
          p-3
          flex
          justify-center
          text-center
          m-1
          px-5
        "
      >
        <img src="/img/icon-whatsapp.png" class="h-5 mr-3" />
        <div class="text-sm text-left">Whatsapp</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
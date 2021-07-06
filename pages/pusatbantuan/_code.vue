<template>
  <div>
    <TitleBack title="PETRONAS BSP" />

    <div
      class="
        bg-gray-300
        h-56
        flex flex-center
        p-5
        leading-loose
        -mx-5
        border-radius-10
      "
    >
      Kami menyediakan 100 pack makanan setiap hari untuk sesiapa yang
      memerlukan
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
        lg:w-1/2
        w-full
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
        Makanan
      </div>

      <p class="text-xl font-bold text-left">PETRONAS BSP</p>

      <div class="flex mb-2">
        <div class="w-4 mr-2">
          <img class="" src="/img/icon-location.png" />
        </div>
        <p class="text-xs">Jalan SP/4, Jenjarom ~ 2km</p>
      </div>

      <!-- <div class="flex">
        <div class="w-4 mr-2">
          <img class="" src="/img/icon-help.png" />
        </div>
        <p class="text-xs">Keperluan asas, makanan</p>
      </div> -->

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
import TitleBack from '~/components/shared/TitleBack.vue'
export default {
  name: 'PusatBantuanDetail',
  components: {
    TitleBack,
  },
}
</script>

<style>
</style>

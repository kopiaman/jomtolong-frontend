<template>
  <div class="w-full lg:w-1/3 p-2" @click="gotopage()">
    <div
      class="
        clickable
        position-relative
        h-40
        bg-white
        border
        rounded-lg
        border-gray-400
        p-4
      "
    >
      <!--  tag-->
      <!-- <div
        class="bg-green-300 position-absolute position-top-right mt-2 mr-2 tag"
      >
        Makanan
      </div> -->

      <p class="text-xl font-bold text-left text-green-500">PETRONAS BSPs</p>

      <div class="flex mb-2">
        <div class="w-4 mr-2">
          <img class="" src="/img/icon-location.png" />
        </div>
        <p class="text-xs">Jalan SP4/1, Jenjarom ~ 2km</p>
      </div>

      <div class="flex mb-2">
        <!-- <div class="w-4 mr-2">
              <img class="" src="/img/icon-help.png" />
            </div> -->
        <div class="bg-green-500 text-white tag">Makanan</div>
        <div class="bg-blue-500 text-white tag">Pakaian</div>
      </div>

      <div class="w-full position-absolute position-bottom-right pr-2 pb-2">
        <p class="text-xs text-right">10 minit lalu</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PusatBantuanCard',
  methods: {
    gotopage() {
      this.$router.push('/pusatbantuan/petronasbsp')
    },
  },
}
</script>

<style>
</style>
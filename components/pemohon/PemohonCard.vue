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
      <div class="bg-green-300 position-absolute position-top-right tag">
        BANTUAN DITERIMA
      </div>

      <p class="text-xl font-bold text-left text-green-600">NUR931</p>

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

      <div class="w-full position-absolute position-bottom-right pr-2 pb-2">
        <p class="text-xs text-right">10 minit lalu</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotopage() {
      this.$router.push('/pemohon/nur31')
    },
  },
}
</script>

<style>
</style>
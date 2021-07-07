<template>
  <div
    class="
      bg-gray-400
      h-16
      w-full
      position-fixed position-bottom-left
      flex flex-space
    "
  >
    <div class="flex flex-col items-center justify-end w-1/3 p-2">
      <div class="clickable" @click="$router.push('/pemohon')">
        <img src="/img/icon-flag-me.png" class="h-30px" />
      </div>
      <div class="font-size-10">Pemohon</div>
    </div>

    <div class="flex flex-col items-center justify-end w-1/3 p-2">
      <div class="clickable" @click="$router.push('/pusatbantuan')">
        <img src="/img/icon-ngo.png" class="h-30px" />
      </div>
      <div class="font-size-10">Pusat Bantuan</div>
    </div>

    <div class="flex flex-col flex-center text-center w-1/3 p-2">
      <div class="clickable" @click="$router.push('/misc/about')">
        <img src="/svg/meat.svg" class="h-30px" />
      </div>
      <div class="font-size-10">FAQ</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
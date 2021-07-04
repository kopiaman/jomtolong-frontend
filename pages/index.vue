<template>
  <div class="container">
    <div class="mb-12">
      <img src="/img/logofront.png" />
    </div>
    <div
      class="
        w-full
        bg-white
        border
        rounded-lg
        border-green-200
        p-3
        inline-flex
        items-center
        m-1
        px-5
      "
    >
      <img src="/img/icon-flag-me.png" class="h-12 mr-3" />
      <div class="text-sm text-left">Permohonan bantuan untuk diri sendiri</div>
    </div>
    <div
      class="
        w-full
        bg-white
        border
        rounded-lg
        border-green-200
        p-3
        inline-flex
        items-center
        m-1
        px-5
      "
    >
      <img src="/img/icon-flag-others.png" class="h-12 mr-3" />
      <div class="text-sm text-left w-2/3">
        Permohonan bantuan untuk orang lain
      </div>
    </div>
    <div
      class="
        w-full
        bg-green-300
        border
        rounded-lg
        border-green-200
        p-3
        inline-flex
        items-center
        m-1
        px-5
        clickable
      "
      @click="$router.push('/donatees')"
    >
      <div class="text-sm text-left w-2/3">
        Anda ingin membuat sumbangan terus ke penerima
      </div>
      <img src="/img/icon-donate.png" class="h-12 ml-3" />
    </div>
    <div
      class="
        w-full
        bg-green-500
        border
        rounded-lg
        border-green-200
        p-3
        inline-flex
        items-center
        m-1
        px-5
      "
    >
      <div class="text-sm text-left w-2/3">
        Daftar sebagai pemberi bantuan di kawasan anda
      </div>
      <img src="/img/icon-ngo.png" class="h-12 ml-3" />
    </div>
    <p class="w-full h-3 text-sm text-center">v.0.1.0</p>
  </div>
</template>

<script>
export default {
  components: {},

  created() {},
}
</script>

<style>
</style>

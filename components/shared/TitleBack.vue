<template>
  <div class="flex items-center pb-3">
    <div class="w-5 mr-2 clickable" @click="$router.back()">
      <img src="/svg/left-arrow.svg" />
    </div>
    <h1 class="text-xl font-bold">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style>
</style>
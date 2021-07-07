<template>
  <div class="w-full lg:w-1/3 p-2" @click="gotopage()">
    <div
      class="
        clickable
        position-relative
        h-30
        bg-white
        border
        rounded-lg
        border-gray-400
        p-4
      "
    >
      <div class="position-absolute position-top-right flex">
        <div class="tag bg-green-200 flex">
          {{ data.helpers_no }}
          <img src="/svg/shake-hands.svg" class="h-15px ml-1" />
        </div>

        <div class="tag bg-green-400 flex text-white">
          Mencukupi
          <img src="/svg/checked.svg" class="h-15px ml-1" />
        </div>
      </div>

      <p class="text-xl font-bold text-left text-indigo-600 pt-3">
        {{ data.code }}
      </p>

      <div class="flex mb-2">
        <div class="w-4 mr-2">
          <img class="h-15px" src="/img/icon-location.png" />
        </div>
        <p class="text-xs text-gray-600">{{ data.street }}, {{ data.city }}</p>
      </div>

      <div class="flex -mx-1">
        <!-- <div class="w-4 mr-2">
          <img class="" src="/img/icon-help.png" />
        </div> -->
        <p class="text-xs">
          <span v-for="tag in data.tags" class="tag bg-gray-200"
            >{{ tag }}
          </span>
        </p>
      </div>

      <div class="text-xs my-2 p-2">{{ data.content }}</div>

      <div class="w-full position-absolute position-bottom-right pr-2 pb-2">
        <p class="text-xs text-right text-gray-500">
          {{ data.created_at_alt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    gotopage() {
      this.$router.push('/pemohon/nur31')
    },
  },
}
</script>

<style>
</style>
<template>
  <div class="w-full lg:w-1/3 p-2" @click="gotopage(card)">
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
        <!-- <div class="tag bg-green-200 flex">
          {{ card.helpers_no }}
          <img src="/svg/shake-hands.svg" class="h-15px ml-1" />
        </div> -->

        <div class="tag bg-green-400 flex text-white" v-if="card.is_enough">
          Mencukupi
          <img src="/svg/checked.svg" class="h-15px ml-1" />
        </div>
      </div>

      <p class="text-xl font-bold text-left text-indigo-600 pt-3">
        {{ card.name }}
      </p>

      <div class="flex mb-2">
        <div class="w-4 mr-2">
          <img class="h-15px" src="/img/icon-location.png" />
        </div>
        <p class="text-xs text-gray-600">
          {{ card.street }}, {{ card.district }}, {{ card.state }}
        </p>
      </div>

      <div class="text-xs my-2 p-2">{{ card.info_truncate }}</div>

      <div class="flex flex-wrap -mx-1">
        <span
          v-for="service in services"
          :key="service"
          class="tag text-xxs bg-gray-200"
          >{{ service }}
        </span>
      </div>

      <div class="w-full position-absolute position-bottom-right pr-2 pb-2">
        <p class="text-xs text-right text-gray-500">
          {{ card.created_at_alt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  computed: {
    services() {
      return JSON.parse(this.card.service)
    },
  },
  methods: {
    gotopage(card) {
      this.$router.push(`/pemohon/${card.slug}`)
    },
  },
}
</script>

<style>
</style>
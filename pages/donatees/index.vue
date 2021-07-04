<template>
  <div>
    <p class="w-52 mb-3 text-xl font-bold text-center text-black">
      Senarai Pemohon Bantuan
    </p>

    <div class="flex">
      <select class="input" v-model="selectedState" @change="getCitiesData()">
        <option value="-">Negeri</option>
        <option v-for="state in states" :key="state">{{ state }}</option>
      </select>

      <select class="input" v-model="selectedCity">
        <option value="-">Bandar</option>
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
    </div>

    <div class="text-gray-700 py-2 text-xs">Terdapat 90 rekod</div>

    <div class="flex flex-wrap">
      <DonatessCard />
      <DonatessCard />
      <DonatessCard />
      <DonatessCard />
      <DonatessCard />
    </div>
  </div>
</template>

<script>
import DonatessCard from '../../components/donatees/DonatessCard.vue'
import {
  //   allPostcodes,
  getStates,
  getCities,
  //   getPostcodes,
  //   findPostcode,
} from 'malaysia-postcodes'
export default {
  components: { DonatessCard },
  data() {
    return {
      states: getStates(),
      selectedState: '-',
      cities: [],
      selectedCity: '-',
    }
  },
  methods: {
    getCitiesData() {
      if (this.selectedState != '-') {
        this.cities = getCities(this.selectedState)
      }
      return '-'
    },
  },
}
</script>




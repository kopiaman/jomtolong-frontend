<template>
  <div>
    <h1>Senarai Pusat Bantuan</h1>

    <div class="flex">
      <select class="input" v-model="selectedState" @change="getCitiesData()">
        <option value="-">Negeri</option>
        <option v-for="state in states" :key="state">{{ state }}</option>
      </select>

      <select class="input" v-model="selectedCity">
        <option value="-">Kawasan</option>
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
    </div>

    <div class="text-gray-700 py-2 text-xs">Terdapat 90 rekod</div>

    <div class="flex flex-wrap">
      <PusatBantuanCard />
      <PusatBantuanCard />
      <PusatBantuanCard />
      <PusatBantuanCard />
      <PusatBantuanCard />
    </div>
  </div>
</template>

<script>
import PusatBantuanCard from '../../components/pusatbantuan/PusatBantuanCard.vue'
import {
  //   allPostcodes,
  getStates,
  getCities,
  //   getPostcodes,
  //   findPostcode,
} from 'malaysia-postcodes'
export default {
  components: { PusatBantuanCard },
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
      if (this.selectedState == 'Wp Kuala Lumpur') {
        this.cities = [
          'Bukit Bintang',
          'Titiwangsa',
          'Setiawangsa',
          'Wangsa Maju',
          'Batu',
          'Kepong',
          'Segambut',
          'Lembah Pantai',
          'Seputeh',
          'Bandar Tun Razak',
          'Cheras',
        ]
      }
      return '-'
    },
  },
}
</script>




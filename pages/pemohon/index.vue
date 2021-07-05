<template>
  <div>
    <!-- <p class="w-52 mb-3 text-xl font-bold text-center text-black">
      Senarai Pemohon Bantuan
    </p> -->

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
      <PemohonCard />
      <PemohonCard />
      <PemohonCard />
      <PemohonCard />
      <PemohonCard />
    </div>
  </div>
</template>

<script>
import PemohonCard from '../../components/pemohon/PemohonCard.vue'
import {
  //   allPostcodes,
  getStates,
  getCities,
  //   getPostcodes,
  //   findPostcode,
} from 'malaysia-postcodes'
export default {
  components: { PemohonCard },
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




<template>
  <div class="h-screen flex flex-col flex-center">
    <div class="mb-12 flex justify-center">
      <img src="/img/logofront.png" />
    </div>

    <p class="font-bold">Sila Pilih Kawasan Anda</p>
    <div class="flex flex-col w-full lg:w-1/2">
      <select class="input" v-model="selectedState" @change="getCitiesData()">
        <option value="-">Negeri</option>
        <option v-for="state in states" :key="state">{{ state }}</option>
      </select>

      <select class="input" v-model="selectedCity">
        <option value="-">Kawasan</option>
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>

      <button class="button-primary" @click="$router.push('/pemohon')">
        Cari
      </button>
    </div>

    <!-- <div
      class="
        w-full
        lg:w-1/2
        bg-white
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
      @click="$router.push('/donatees/apply')"
    >
      <img src="/img/icon-flag-me.png" class="h-12 mr-3" />
      <div class="text-sm text-left">Permohonan bantuan untuk diri sendiri</div>
    </div>
    <div
      class="
        w-full
        lg:w-1/2
        bg-white
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
    >
      <img src="/img/icon-flag-others.png" class="h-12 mr-3" />
      <div class="text-sm text-left w-2/3">
        Permohonan bantuan untuk orang lain
      </div>
    </div>
    <div
      class="
        w-full
        lg:w-1/2
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
    </div> -->
    <!-- <div
      class="
        w-full
        lg:w-1/2
        bg-green-500
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
    >
      <div class="text-sm text-left w-2/3">
        Daftar sebagai pemberi bantuan di kawasan anda
      </div>
      <img src="/img/icon-ngo.png" class="h-12 ml-3" />
    </div> -->

    <p class="w-full h-3 text-sm text-center mt-5">v.0.1.0</p>
  </div>
</template>

<script>
import {
  //   allPostcodes,
  getStates,
  getCities,
  //   getPostcodes,
  //   findPostcode,
} from 'malaysia-postcodes'
export default {
  layout: 'container',
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


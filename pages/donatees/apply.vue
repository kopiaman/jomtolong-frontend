<template>
  <div>
    <title-back title="Permohonan Bantuan" />

    <input class="input" placeholder="Nama Penerima (tidak dipaparkan" />

    <input class="input" placeholder="No Tel/ Whatsapp Penerima" />

    <select class="input" v-model="selectedState" @change="getCitiesData()">
      <option value="-">Negeri</option>
      <option v-for="state in states" :key="state">{{ state }}</option>
    </select>

    <select class="input" v-model="selectedCity">
      <option value="-">Daerah</option>
      <option v-for="city in cities" :key="city">{{ city }}</option>
    </select>

    <textarea
      class="textarea"
      rows="5"
      placeholder="Ringkasan Situasi penerima, bantuan yang diperlukan secara spesifik"
    >
    </textarea>

    <div>Kategori Bantuan diperlukan</div>
    <div class="flex flex-wrap">
      <div class="flex items-center text-xs w-1/2">
        <input type="checkbox" class="mr-2" />
        <label>Makanan </label>
      </div>
      <div class="flex items-center text-xs w-1/2">
        <input type="checkbox" class="mr-2" />
        <label>Pakaian</label>
      </div>
      <div class="flex items-center text-xs w-1/2">
        <input type="checkbox" class="mr-2" />
        <label>Tempat Tinggal</label>
      </div>
      <div class="flex items-center text-xs w-1/2">
        <input type="checkbox" class="mr-2" />
        <label>Pendidikan</label>
      </div>
      <div class="flex items-center text-xs w-1/2">
        <input type="checkbox" class="mr-2" />
        <label>Kesihatan</label>
      </div>
      <div class="flex items-center text-xs w-1/2">
        <input type="checkbox" class="mr-2" />
        <label>Lain-Lain</label>
      </div>
    </div>

    <button class="bg-green-500 button-primary mt-5">SETERUSNYA</button>
  </div>
</template>

<script>
import TitleBack from '../../components/shared/TitleBack.vue'
import {
  //   allPostcodes,
  getStates,
  getCities,
  //   getPostcodes,
  //   findPostcode,
} from 'malaysia-postcodes'

export default {
  name: 'ApplyDonatees',
  components: { TitleBack },
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

<style>
</style>
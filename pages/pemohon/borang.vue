<template>
  <div>
    <h1>Permohonan Bantuan</h1>

    <div :class="currentStep == '1' ? 'show' : 'hide'" id="step1">
      <input class="input" placeholder="Nama Penerima (tidak dipaparkan" />

      <input class="input" placeholder="No Tel/ Whatsapp Penerima" />

      <div class="text-xs ml-1 mt-2">Alamat</div>
      <div class="flex flex-wrap -mx-1">
        <div class="w-full lg:w-1/3 lg:p-1">
          <input
            class="input"
            placeholder="Nama Jalan/ Taman (Tidak perlu no unit)"
          />
        </div>
        <div class="w-full lg:w-1/3 lg:p-1">
          <select
            class="input"
            v-model="selectedState"
            @change="getCitiesData()"
          >
            <option value="-">Negeri</option>
            <option v-for="state in states" :key="state">{{ state }}</option>
          </select>
        </div>
        <div class="w-full lg:w-1/3 lg:p-1">
          <select class="input" v-model="selectedCity">
            <option value="-">Daerah</option>
            <option v-for="city in cities" :key="city">{{ city }}</option>
          </select>
        </div>
      </div>
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

      <button class="bg-green-500 button-primary mt-5" @click="changeStep(2)">
        SETERUSNYA
      </button>
    </div>

    <div :class="currentStep == '2' ? 'show' : 'hide'" id="step2">
      <h2 class="font-bold">Review Permohonan</h2>
      <ol class="text-xs leading-loose list-decimal pl-4 mt-4">
        <li>Saya mengaku bahawa maklumat penerima bantuan adalah benar</li>
        <li>
          Saya berjanji tidak akan menyalah guna bantuan yang diberikan seperti
          menjual semula barangan bantuan kepada orang lain
        </li>
        <li>
          Saya memberi kebenaran untuk dihubungi secara langsung oleh penderma/
          sukarelawan
        </li>
        <li>
          Rekod bantuan ini akan dipaparkan selama 7 hari dari kelulusan secara
          automatik
        </li>
        <li>
          Saya akan memaklumkan admin sekiranya bantuan diterima dan mencukupi
        </li>
      </ol>

      <div class="flex items-center mt-4">
        <input type="checkbox" class="mr-3" />
        <label class="text-xs font-bold"
          >Saya bersetuju dengan syarat dan peraturan am seperti di atas</label
        >
      </div>

      <button class="button-primary mt-5" @click="submitForm()">HANTAR</button>
    </div>

    <div
      :class="formStatus == 'success' && currentStep == '3' ? 'show' : 'hide'"
      id="step3"
      class="p-5 text-center border border-radius-10 flex flex-col flex-center"
    >
      <img src="/img/icon-tick.png" class="h-24" />
      <h2 class="font-bold py-3">Permohonan Diterima</h2>

      <p>Pihak admin akan membuat pengesahan sebelum permohonan diluluskan</p>

      <button class="button-primary my-3" @click="$router.push('/')">
        KEMBALI KE MUKA UTAMA
      </button>
    </div>

    <div
      :class="formStatus == 'failed' && currentStep == '3' ? 'show' : 'hide'"
      id="step3"
      class="p-5 text-center border border-radius-10 flex flex-col flex-center"
    >
      <img src="/svg/error.svg" class="h-24" />
      <h2 class="font-bold py-3">Teknikal Error</h2>

      <p>Ada masalah teknikal. Sila hubungi admin</p>

      <button class="button-primary my-3" @click="$router.push('/')">
        KEMBALI KE MUKA UTAMA
      </button>
    </div>
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
      currentStep: '1',
      formStatus: '',
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
    changeStep(step) {
      this.currentStep = step
    },
    submitForm() {
      this.currentStep = 3
      this.formStatus = 'failed'
    },
  },
}
</script>

<style>
</style>
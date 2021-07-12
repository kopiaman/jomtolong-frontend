<template>
  <div>
    <h1>Permohonan Bantuan</h1>

    <div :class="currentStep == '1' ? 'show' : 'hide'" id="step1">
      <div class="flex flex-wrap -mx-1">
        <div class="w-full lg:w-1/2 p-1">
          <input
            class="input"
            name="name"
            v-model="name"
            autocomplete="off"
            placeholder="Nama Penerima (tidak dipaparkan"
          />
        </div>

        <div class="w-full lg:w-1/2 p-1">
          <input
            class="input"
            name="tel"
            v-model="tel"
            autocomplete="off"
            placeholder="No Tel/ Whatsapp Penerima"
          />
        </div>
      </div>

      <div class="label">Alamat</div>
      <div class="flex flex-wrap -mx-1">
        <div class="w-full lg:w-1/3 p-1">
          <input
            class="input"
            type="text"
            name="street"
            v-model="street"
            autocomplete="off"
            placeholder="Nama Jalan/ Taman "
          />
        </div>
        <div class="w-full lg:w-1/3 p-1">
          <select
            class="input"
            v-model="selected_state"
            @change="getCitiesData()"
          >
            <option value="">Negeri</option>
            <option v-for="state in states" :key="state">{{ state }}</option>
          </select>
        </div>
        <div class="w-full lg:w-1/3 p-1">
          <select class="input" v-model="selected_district">
            <option value="">Kawasan</option>
            <option v-for="city in cities" :key="city">{{ city }}</option>
          </select>
        </div>
      </div>
      <div class="p-1 -mx-1">
        <textarea
          class="textarea"
          rows="5"
          v-model="info"
          placeholder="Ringkasan Situasi penerima, bantuan yang diperlukan secara spesifik"
        >
        </textarea>
      </div>

      <div class="label">Kategori Bantuan diperlukan</div>
      <div class="flex flex-wrap p-1">
        <div
          class="flex items-center text-xs w-1/3"
          v-for="service in services"
          :key="service"
        >
          <input
            type="checkbox"
            class="mr-2"
            :value="service"
            v-model="selected_services"
          />
          <label>{{ service }} </label>
        </div>
      </div>

      <div class="label">Kata Laluan/ Password (untuk edit)</div>
      <div class="lg:w-1/3">
        <input
          class="input"
          name="code"
          type="password"
          v-model="code"
          placeholder="Password (untuk edit)"
        />
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
  computed: {},
  data() {
    return {
      states: getStates(),
      cities: [],
      selected_state: '',
      selected_district: '',

      currentStep: '1',
      formStatus: '',
      name: '',
      street: '',
      tel: '',
      tel_is_whatsapp: 1,
      info: '',

      code: '',

      // jenis bantuan
      selected_services: [],
      services: [
        'Makanan',
        'Barangan Asas',
        'Tempat Tinggal',
        'Perubatan',
        'Pakaian',
        'Pendidikan',
        'Alat Pembelajaran',
        'Bayi',
        'Pekerjaan',
        'Psikologi',
        'Keagamaan',
        'Bil Utiliti',
        'Lain-lain',
      ],
    }
  },
  methods: {
    getCitiesData() {
      if (this.selected_state != '-' && this.selected_state != '') {
        this.cities = getCities(this.selected_state)
      }
      if (this.selected_state == 'Wp Kuala Lumpur') {
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
      this.$store.commit('UPDATE_is_loading', true)

      const body = {
        type: 'donatee',
        status: 'approved',
        name: this.name,
        tel: this.tel,
        tel_is_whatsapp: 1,
        street: this.street,
        state: this.selected_state,
        district: this.selected_district,
        info: this.info,
        service: JSON.stringify(this.selected_services),
        lat: this.lat ? '' : '',
        long: this.long ? '' : '',
        code: this.code,
      }
      this.$store
        .dispatch('card_donatee/store', body)
        .then(() => {
          this.currentStep = 3
          this.formStatus = 'success'
        })
        .catch(() => {
          this.currentStep = 3
          this.formStatus = 'failed'
        })
        .finally(() => this.$store.commit('UPDATE_is_loading', false))
    },
  },
}
</script>

<style>
</style>
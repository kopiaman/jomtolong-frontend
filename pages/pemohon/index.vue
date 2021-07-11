<template>
  <div>
    <h1>Senarai Pemohon Bantuan</h1>

    <div class="flex">
      <select class="input" v-model="selectedState" @change="getCitiesData()">
        <option value="">Negeri</option>
        <option v-for="state in states" :key="state">{{ state }}</option>
      </select>

      <select
        class="input"
        v-model="selectedCity"
        @change="selectedCityStore()"
      >
        <option value="">Kawasan</option>
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
      <div class="w-1/3 lg:w-1/8">
        <button class="button-primary text-xs font-bold" @click="search()">
          Cari
        </button>
      </div>
    </div>

    <div class="text-gray-700 py-2 text-xs">Terdapat 90 rekod</div>

    <div class="flex flex-wrap">
      <PemohonCard v-for="card in cards" :card="card" :key="card.id" />
    </div>
  </div>
</template>

<script>
import PemohonCard from '~/components/pemohon/PemohonCard.vue'
import {
  //   allPostcodes,
  getStates,
  getCities,
  //   getPostcodes,
  //   findPostcode,
} from 'malaysia-postcodes'

import { mapState } from 'vuex'

export default {
  components: { PemohonCard },
  computed: {
    ...mapState({
      cards: (state) => state.card_donatee.cards,
    }),
  },
  data() {
    return {
      states: getStates(),
      selectedState: '',
      cities: [],
      selectedCity: '',
      donatees: [
        {
          id: 1,
          code: 'Man Pisang',
          street: 'Jalan SP4/1',
          city: 'Jenjarom',
          tags: ['Makanan', 'Barangan Dapur'],
          created_at_alt: '10 minit lalu',
          helpers_no: 4,
          content: 'Kehilangan pekerjaan sejak 3 bulan laku..',
          is_enough: false,
        },
        {
          id: 2,
          code: 'Sarah',
          street: 'Jalan SP4/1',
          city: 'Jenjarom',
          tags: ['Makanan', 'Barangan Dapur'],
          created_at_alt: '15 minit lalu',
          helpers_no: 1,
          content: 'Amat memerlukan bantuan penjagaan 3 orang anak kecil..',
          is_enough: false,
        },
        {
          id: 3,
          code: 'Adam',
          street: 'Jalan Banting 3/1',
          city: 'Jenjarom',
          tags: ['Makanan', 'Barangan Dapur'],
          created_at_alt: '30 minit lalu',
          helpers_no: 2,
          content: 'Tidak makan sejak sehari lalu.amat memerlukan makanan..',
          is_enough: true,
        },
        {
          id: 4,
          code: 'Noh Adam',
          street: 'Jalan DP 3/1',
          city: 'Jenjarom',
          tags: ['Makanan', 'Pakaian'],
          created_at_alt: '1 jam lalu',
          helpers_no: 3,
          content:
            'Bekerja sebagai penjaga, tidak cukup duit beli pampers anak..',
          is_enough: true,
        },
      ],
    }
  },
  created() {
    this.$store.dispatch('card_donatee/index', {
      state: this.$store.state.selected_state,
      district: this.$store.state.selected_district,
    })
  },
  methods: {
    search() {
      console.log('carii')
      this.$store.dispatch('card_donatee/index', {
        state: this.$store.state.selected_state,
        district: this.$store.state.selected_district,
      })
    },
    selectedCityStore() {
      //update selected state in store
      this.$store.commit('UPDATE_selected_district', this.selectedCity)
    },
    getCitiesData(state) {
      if (this.selectedState != '-') {
        //update selected state in store
        this.$store.commit('UPDATE_selected_state', this.selectedState)
        this.cities = getCities(this.selectedState)
      }
      if (this.selectedState == 'Wp Kuala Lumpur') {
        //update selected state in store
        this.$store.commit('UPDATE_selected_state', this.selectedState)
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




<template>
  <div>
    <h1>Senarai Pemohon Bantuan</h1>

    <div class="flex">
      <select class="input" v-model="selected_state" @change="getCitiesData()">
        <option value="">Negeri</option>
        <option v-for="state in states" :key="state">{{ state }}</option>
      </select>

      <select class="input" v-model="selected_district">
        <option value="">Kawasan</option>
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
      <div class="w-1/3 lg:w-1/8">
        <button class="button-primary text-xs font-bold" @click="search()">
          Cari
        </button>
      </div>
    </div>

    <div class="text-gray-700 py-2 text-xs">
      Terdapat {{ cards_result.total }} rekod
    </div>

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
      cards_result: (state) => state.card_donatee.cards_result,
      // selected_state: (state) => state.selected_state,
    }),
    selected_state: {
      get() {
        return this.$store.state.selected_state
      },
      set(value) {
        this.$store.commit('UPDATE_selected_state', value)
      },
    },
    selected_district: {
      get() {
        return this.$store.state.selected_district
      },
      set(value) {
        this.$store.commit('UPDATE_selected_district', value)
      },
    },
  },
  data() {
    return {
      states: getStates(),
      cities: [],
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
      this.$store.commit('UPDATE_is_loading', true)

      this.$store
        .dispatch('card_donatee/index', {
          state: this.$store.state.selected_state,
          district: this.$store.state.selected_district,
        })
        .finally(() => this.$store.commit('UPDATE_is_loading', false))
    },
    selectedCityStore() {
      //update selected state in store
      this.$store.commit('UPDATE_selected_district', this.selectedCity)
    },
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
  },
}
</script>




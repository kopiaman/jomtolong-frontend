<template>
  <div>
    <h1>Senarai Pemohon Bantuan</h1>

    <SearchbarTop />

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
import SearchbarTop from '~/components/shared/SearchbarTop.vue'
import { mapState } from 'vuex'

export default {
  components: { PemohonCard, SearchbarTop },
  computed: {
    ...mapState({
      cards: (state) => state.card_donatee.cards,
      cards_result: (state) => state.card_donatee.cards_result,
    }),
  },

  created() {
    this.$store.dispatch('card_donatee/index', {
      state: this.$store.state.selected_state,
      district: this.$store.state.selected_district,
    })
  },
}
</script>




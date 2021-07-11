<template>
  <div>
    <TitleBack :title="card.name" />

    <div class="flex flex-wrap position-relative">
      <div class="p-2 lg:w-1/2 w-full">
        <div class="bg-gray-300 flex flex-center p-5 leading-loose rounded-lg">
          {{ card.info }}
        </div>
      </div>

      <div class="p-2 lg:w-1/2 w-full">
        <div class="bg-white border rounded-lg border-gray-400 p-4">
          <div class="flex mb-2">
            <!-- <div class="w-4 mr-2">
              <img class="" src="/img/icon-help.png" />
            </div> -->
            <div class="bg-red-500 text-white tag">Makanan</div>
            <div class="bg-blue-500 text-white tag">Pakaian</div>
          </div>

          <div class="flex mb-2">
            <div class="w-4 mr-2">
              <img class="" src="/img/icon-location.png" />
            </div>
            <p class="">
              {{ card.street }}, {{ card.district }}, {{ card.state }}
            </p>
          </div>

          <div class="button-primary mt-4">
            <img src="/img/icon-call.png" class="h-5 mr-3" />
            <div class="text-sm text-left">Call</div>
          </div>

          <div class="button-secondary">
            <img src="/img/icon-whatsapp.png" class="h-5 mr-3" />
            <div class="text-sm text-left">Whatsapp</div>
          </div>
        </div>

        <div class="bg-gray-100 border rounded-lg border-gray-200 p-4 mt-2">
          <div class="text-xs text-gray-600 flex justify-between">
            <div>
              <div class="font-bold">Pemohon</div>
              <div class="underline my-1">Edit Maklumat</div>
              <div class="underline">Bantuan Mencukupi</div>
            </div>
            <div class="text-blue-500">
              <div class="font-bold">Penyumbang</div>
              <div class="underline my-1">Saya telah membantu</div>
              <div class="underline">Buat Laporan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBack from '~/components/shared/TitleBack.vue'
import { mapState } from 'vuex'

export default {
  name: 'PusatBantuanDetail',
  computed: {
    ...mapState({
      card: (state) => state.card_donatee.card,
    }),
  },
  components: {
    TitleBack,
  },
  created() {
    this.$store.dispatch('card_donatee/show', this.$route.params.slug)
  },
}
</script>

<style>
</style>

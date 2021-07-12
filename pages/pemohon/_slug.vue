<template>
  <div>
    <TitleBack title="Maklumat Pemohon" />

    <div class="flex flex-wrap position-relative">
      <div class="position-absolute position-top-right flex">
        <!-- <div class="tag bg-green-200 flex">
          {{ card.helpers_no }}
          <img src="/svg/shake-hands.svg" class="h-15px ml-1" />
        </div> -->

        <div class="tag bg-green-400 flex text-white" v-if="card.is_enough">
          Mencukupi
          <img src="/svg/checked.svg" class="h-15px ml-1" />
        </div>
      </div>

      <div class="p-2 lg:w-1/2 w-full">
        <div class="bg-gray-300 flex flex-center p-5 leading-loose rounded-lg">
          {{ card.info }}
        </div>
      </div>

      <div class="p-2 lg:w-1/2 w-full">
        <div class="bg-white border rounded-lg border-gray-400 p-4">
          <h1 class="py-2">{{ card.name }}</h1>
          <div class="flex mb-2">
            <div class="w-4 mr-2">
              <img class="" src="/img/icon-location.png" />
            </div>
            <p class="">
              {{ card.street }}, {{ card.district }}, {{ card.state }}
            </p>
          </div>

          <div class="font-bold pt-2 text-gray-600">
            Kategori bantuan diperlukan:
          </div>
          <div class="flex flex-wrap mb-2">
            <div
              class="bg-gray-200 text-black tag"
              v-for="service in services"
              :key="service"
            >
              {{ service }}
            </div>
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
              <div class="underline clickable" @click="openModalIsEnough()">
                Bantuan Mencukupi
              </div>
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
    services() {
      if (this.card) {
        return JSON.parse(this.card.service)
      }
    },
  },
  components: {
    TitleBack,
  },
  created() {
    this.$store.dispatch('card_donatee/show', this.$route.params.slug)
  },
  methods: {
    openModalIsEnough() {
      // this.$swal('Hello Vue world!!!')

      this.$swal({
        title: 'Bantuan Telah Diterima/Mencukupi?',
        input: 'text',
        html: `Sila masukkan kata laluan (password) yang sama dalam permohonan anda untuk pengesahan`,
        inputValue: '',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Sila masukkan kata laluan!'
          }
        },
      }).then((input) => {
        const param = {
          slug: this.card.slug,
          is_enough: 1,
          code: input.value,
        }

        this.$store
          .dispatch('card_donatee/request_update', param)
          .then((res) => {
            this.$swal({
              icon: 'success',
              title: 'Berjaya',
              text: 'Maklumat Dikemaskini - Bantuan Mencukupi',
            })
          })
          .catch((err) => {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: err,
            })
          })
      })
    },
  },
}
</script>

<style>
</style>

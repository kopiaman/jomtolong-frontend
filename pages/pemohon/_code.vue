<template>
  <div>
    <TitleBack title="NUR891" />

    <div class="flex flex-wrap position-relative">
      <div class="p-2 lg:w-1/2 w-full">
        <div class="bg-gray-300 flex flex-center p-5 leading-loose rounded-lg">
          hampir 10 tahun bergelar ibu tunggal selepas kematian suami pada
          September 2011 cukup mematangkannya dan sudah biasa bersusah-payah
          dengan melakukan pelbagai pekerjaan untuk menyara keluarga. "Selepas
          pemergian suami, saya mengambil alih kerjayanya sebagai pemandu van
          sekolah yang pada awalnya bermula dengan kereta. Van sekolah itu
          dibeli pada 2013 melalui pinjaman Amanah Ikhtiar Malaysia (AIM).
          "Sambil-sambil ada masa terluang, saya juga membuat kuih bahulu dan
          ambil upah cuci rumah sebagai pendapatan sampingan," katanya ketika
          ditemui di rumahnya di Jalan Jasa, Batu Caves, di sini.
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
            <p class="">Puchong, Selangor</p>
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
export default {
  name: 'PusatBantuanDetail',
  components: {
    TitleBack,
  },
}
</script>

<style>
</style>

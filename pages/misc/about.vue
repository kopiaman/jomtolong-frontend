<template>
  <div>
    <!-- <h1 class="py-3">Mengenai Kami</h1> -->

    <!-- <h2>Mengenai JomTolong</h2> -->
    <div>
      JomTolong.my merupakan platform crowdsource untuk komuniti membantu sesama
      sendiri.
    </div>

    <client-only>
      <div class="flex justify-center mt-3">
        <VueFaqAccordion
          :items="myItems"
          fontColor="text-purple-400"
          activeColor="bg-purple-400"
          class=""
        />
      </div>
    </client-only>

    <div></div>
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'
export default {
  components: {
    VueFaqAccordion,
  },
  data() {
    return {
      myItems: [
        {
          title: 'Kenapa dinamakan Suaquran?',
          value:
            'Sua bermaksud berjumpa atau bertemu. Jadi Sua + Quran bermaksud bertemu Quran',
          category: 'FAQ',
        },
        {
          title: 'Apakah tujuan Suaquran dibangunkan',
          value: `Kami ingin menjadikan SuaQuran sebagai aplikasi Quran yang menarik umat Islam menggunakannya setiap masa. 
																																																																	Kebanyakan aplikasi Quran sedia ada mempunyai kelemahan dari segi rekabentuk, fungsi dan pengalaman pengguna yang kurang baik.`,
          category: 'FAQ',
        },
        {
          title: 'Dari manakah sumber kandungan aplikasi ini? ',
          value:
            'Kami mengambil sumber dari Quran.com untuk senarai surah, ayat, tulisan, terjemahan, serta audio.  ',
          category: 'FAQ',
        },
        {
          title:
            'Adakah saya boleh download aplikasi Suaquran di Play Store atau App Store?',
          value: `Ia sedang diusahakan. Buat masa sekarang anda boleh 'Send to HomeScreen' untuk membuat akses singkat ke aplikasi Suaquran  `,
          category: 'FAQ',
        },
      ],
    }
  },
}
</script>

<style>
.faq__nav {
  display: none !important;
}
</style>
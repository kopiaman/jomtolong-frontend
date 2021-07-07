<template>
  <div>
    <h1 class="py-2">Pertanyaan Am (FAQ)</h1>
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
          title: 'Apa itu JomTolong.my?',
          value: `JomTolong.my merupakan platform bantuan komuniti .
        <br> <br>
        Pengguna boleh membuat pilihan untuk menjadi penyumbang atau pemohon
        bantuan.
        <br> <br>
        Selain itu pengguna juga menjadi sukarelawan dengan memasukkan rekod
        orang yang memerlukan bantuan serta rekod pusat bantuan/food bank yang
        berdekatan.

        <br /> <br>
        Kaedah bantuan yang digalakkan adalah dengan menyumbang terus barangan
        keperluan/makanan kepada pemohon berdekatan.`,
          category: 'FAQ',
        },
        {
          title: 'Siapa di sebalik JomTolong.my?',
          value: `Kami masih sedang mencari sukarelawan untuk menjadi sebahagian team projek JomTolong. 
           Pengasas dan lead developer untuk projek JomTolong adalah Salman Ahmad Tajudin.
           Boleh hubungi kami di email jomtolong@gmail.com jika berminat membantu`,
          category: 'FAQ',
        },
        {
          title: 'Bagaimana mekanisma pertolongan komuniti di platform ini?',
          value: `Pemohon bantuan boleh mengisi borang ringkas dengan lengkap, 
          dan penyumbang akan menghubungi anda secara terus untuk menyampaikan bantuan  `,
          category: 'FAQ',
        },
        {
          title: 'Bagaimana anda memastikan kesahihan permohonan bantuan?',
          value: `Buat masa ini, borang yang disubmit akan disemak oleh admin terlebih dahulu, sebelum diluluskan. `,
          category: 'FAQ',
        },
        {
          title:
            'Adakah orang yang sama boleh hantar banyak permohonan bantuan?',
          value: `Tidak, buat masa ini, sistem akan menyemak pemohon telah mepunyai rekod sedia ada melalui no tel yang diberikan `,
          category: 'FAQ',
        },
        {
          title:
            'Mengapa pemohon tidak perlu memasukkan no akaun bank di dalam borang? Bukankah lebih senang penyumbang terus masukkan duit kepada pemohon bantuan?',
          value: `Kami menggalakkan bantuan barangan fizikal terus diberi daripada komuniti terdekat. 
          Namun penyumbang boleh pindah dana terus ke akaun jika itu yang diperlukan oleh pemohon`,
          category: 'FAQ',
        },

        {
          title:
            'Bagaimana untuk saya melibatkan secara langsung dalam projek JomTolong ini?  ',
          value: 'Boleh hubungi secara langsung di email jomtolong@gmail.com',
          category: 'FAQ',
        },

        {
          title:
            'Adakah saya boleh download aplikasi JomTolong di Play Store atau App Store?',
          value: `Buat masa sekarang, JomTolong hanya tersedia untuk web browser. Tetapi aplikasi web ini adalah 'Progressive Web App' jadi 
          anda boleh 'install' webapp ini dengan tap 'Add to home screen' jika menggunakan Chrome Browser untuk peranti Android`,
          category: 'FAQ',
        },
        {
          title: 'Mengapa anda membina platform ini?',
          value: `Pandemik dan lockdown yang berpanjangan telah menyebabkan ramai kehilangan kerja dan punca rezeki. 
          Inisiatif warga Malaysia yang mengibarkan bendera putih untuk memohon pertolongan membuka mata semua
           pihak bahawa begitu ramai warga yang terdesak yang memerlukan bantuan dengan segera. 
          Kami berharap platfom ini dapat segera membantu warganegara dengan lebih mudah.
          `,
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

.accordion__title-text {
  @apply font-bold text-green-600;
}
</style>
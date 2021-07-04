<template>
  <div>
    <p class="w-52 mb-3 text-xl font-bold text-center text-black">
      Senarai Penerima
    </p>

    <div class="flex">
      <div class="w-1/2 h-12 bg-gray-50 border rounded-lg border-black m-1">
        <div class="w-24 h-5 text-sm font-bold text-center text-gray-600">
          Pilih Negeri
        </div>
      </div>
      <div class="w-1/2 h-12 bg-gray-50 border rounded-lg border-black m-1">
        <div class="w-24 h-5 text-sm font-bold text-center text-gray-600">
          Pilih Daerah
        </div>
      </div>
    </div>

    <div class="text-gray-700 py-2 text-xs">Terdapat 90 rekod</div>

    <DonatessCard />
    <DonatessCard />
    <DonatessCard />
  </div>
</template>

<script>
import DonatessCard from '../../components/donatees/DonatessCard.vue'

export default {
  components: { DonatessCard },
}
</script>




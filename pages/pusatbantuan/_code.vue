<template>
  <div>
    <TitleBack title="PETRONAS BSP" />

    <div class="flex flex-wrap position-relative">
      <!-- tag -->

      <div class="p-2 lg:w-1/2 w-full">
        <div class="bg-gray-300 flex flex-center p-5 leading-loose rounded-lg">
          Kami menyediakan 100 pack makanan setiap hari untuk sesiapa yang
          memerlukan Nam liber tempor cum soluta nobis eleifend option congue
          nihil imperdiet doming id quod mazim placerat facer possim assum.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
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
            <p class="">Jalan SP/4, Jenjarom ~ 2km</p>
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

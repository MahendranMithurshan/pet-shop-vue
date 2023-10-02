<template>
  <AdoptNavbar />
  <div
    class="relative pt-20 pb-32 flex content-center items-center justify-center"
    style="min-height: 70vh"
  >
    <div
      class="absolute top-0 w-full h-full opacity-100 bg-black"
      style="
        background-image: url('https://img.freepik.com/free-photo/front-view-beautiful-dog-with-copy-space_23-2148786561.jpg?w=1380&t=st=1686906062~exp=1686906662~hmac=259dcad2e9aea3c8a62e5408ab4a0bfafc8f0e175cf4eca859d53fc0de402bd8');
      "
    ></div>
    <span
      id="blackOverlay"
      class="w-full top-0 h-full absolute opacity-50 bg-black"
    ></span>

    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div>
            <h1 class="text-white font-semibold text-5xl mb-12">
              Find Your Perfect Companion: Adopt a<span class="text-orange-700">
                Rescued Pet</span> Today!
            </h1>

            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto px-5 md:max-w-screen-lg">
    <AdoptionComponent />
  </div>
</template>

<script>
import AdoptNavbar from "../components/NavbarAdopt.vue";
import AdoptionComponent from "../components/AdoptionComponent.vue";

export default {
  components: {
    AdoptNavbar,
    AdoptionComponent,
  },
};
</script>

<template>
  <ProductNavbar />
  <div
    class="relative pt-20 pb-32 flex content-center items-center justify-center"
    style="min-height: 70vh"
  >
    <div
      class="absolute top-0 w-full h-full opacity-100 bg-black"
      style="
        background-image: url('https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-148018.jpg?w=1380&t=st=1686906224~exp=1686906824~hmac=b93da429a8fce77b9538d65b49ac28efc269ac169fe258c890fc1124967632ca');
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
              Convenient and Secure Shopping for Your
              <span class="text-orange-700">Furry</span> Friends!
            </h1>

            <!-- <p class="mt-4 text-lg text-gray-300">
                  This is a simple example of a Landing Page you can build using
                  Tailwind Starter Kit. It features multiple CSS components
                  based on the Tailwindcss design system.
                </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto px-5 md:max-w-screen-lg">
    <ProductListing />
  </div>
</template>

<script>
import ProductListing from "../components/ProductListing.vue";
import ProductNavbar from "../components/NavbarProduct.vue";

export default {
  components: {
    ProductListing,
    ProductNavbar,
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

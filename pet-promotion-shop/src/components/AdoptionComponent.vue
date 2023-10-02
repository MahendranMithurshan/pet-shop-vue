<template>
  <div class="wrapper mt-20">
    <div class="inner-wrapper">
      <section>
        <div
          class="mx-auto max-w-2xl md:py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
        >
          <div
            class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
          >
            <div
              v-for="pet in pets"
              :key="pet.id"
              class="group hover:scale-105 delay-150 relative px-6 py-3 rounded shadow product-card"
            >
              <div class="overflow-hidden">
                <img
                  :src="pet.image"
                  alt="Product"
                  class="mb-2 mx-auto"
                  style="height: 200px"
                />
              </div>
              <div class="mt-5 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <!-- <a :href="product.href"> -->
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ pet.name }}
                    <!-- </a> -->
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{{ pet.Breed }}</p>
                  <p class="mt-1 text-sm text-gray-500">{{ pet.Gender }}</p>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ pet.Personality }}
                  </p>
                </div>
                <!-- <p class="text-sm font-medium text-gray-900">{{ product.price }}</p> -->
              </div>
              <div class="button mt-5">
                <button
                  class="bg-green-700 text-white font-sans w-full hover:bg-gray-700 py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Adopt
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pets: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "https://api-pet-iplz.onrender.com/pets"
        );
        this.pets = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 mt-16 mb-10"
  >
    <article
      v-for="product in products"
      :key="product.id"
      class="relative flex flex-col overflow-hidden rounded-lg border shadow hover:shadow-lg transition duration-300"
    >
      <div class="overflow-hidden">
        <img
          :src="product.image"
          alt="Product"
          class="mb-2 mx-auto"
          style="height: 200px"
        />
      </div>
      <div class="absolute top-0 m-2 rounded-full bg-white">
        <p
          class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3"
        >
          Sale
        </p>
      </div>
      <div
        class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between"
      >
        <div class="mb-2 flex">
          <p class="mr-3 text-sm font-semibold">
            Price: Rs {{ product.price }}
          </p>
          <del class="text-xs text-gray-400">Price: Rs {{ product.price }}</del>
        </div>
        <h2 class="mb-2 text-sm font-semibold hover:text-green-800">
          {{ product.name }}
        </h2>
      </div>
      <button
        class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600"
      >
        <div
          class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white"
        >
          Add
        </div>
        <div
          class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white"
        >
          +
        </div>
      </button>
    </article>
  </div>
</template>

<script>
import productsData from "../assets/json/products.json";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.products = productsData;
  },
  methods: {
    addToCart(product) {
      console.log("Added to cart:", product);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

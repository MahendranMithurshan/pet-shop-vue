<template>
  <a
    href="/login"
    class="inline-flex justify-between items-center py-3 px-3 pr-4 mb-7 text-sm text-gray-700 bg-gray-500 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
    role="alert"
  >
    <span class="text-xs bg-green-500 rounded-full text-white px-4 py-1.5 mr-3"
      >Coupon</span
    >
    <span class="text-sm font-medium">{{ numberFact }}</span>
    <svg
      class="ml-2 w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </a>
</template>
<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const numberFact = ref("");

    axios
      .get("https://www.random.org/quota/?format=plain")
      .then((response) => {
        numberFact.value = response.data;
      })
      .catch((error) => {
        console.error("Error retrieving number fact:", error);
      });

    return {
      numberFact,
    };
  },
};
</script>

<template>
  <main>
    <div
      class="relative pt-20 pb-32 flex content-center items-center justify-center"
      style="min-height: 100vh"
    >
      <div
        class="absolute top-0 w-full h-full opacity-100 bg-black"
        style="
          background-image: url('https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64796.jpg?w=1480&t=st=1684605589~exp=1684606189~hmac=79c9d73e2bcf8c8f5ec35d2df7fedc02eb0fda6a09fdde41fcbf1f231c9c5c92');
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
              <h1 class="text-white font-semibold text-7xl mb-16">
                Your <span class="text-orange-700">Pet</span> Is Part Of Our
                Family!
              </h1>

              <div v-if="isLoggedIn">
                <ApiComponent />
              </div>
              <div v-else>
                <a
                  href="/login"
                  class="inline-flex justify-between items-center py-3 px-3 pr-4 mb-7 text-sm text-gray-700 rounded-full bg-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  role="alert"
                >
                  <span
                    class="text-xs bg-green-500 rounded-full text-white px-4 py-1.5 mr-3"
                    >Coupon</span
                  >
                  <span class="text-sm font-medium"
                    >Get Your Free 30%  Coupon Code</span
                  >
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
              </div>
              <!-- <p class="mt-4 text-lg text-gray-300">
                  This is a simple example of a Landing Page you can build using
                  Tailwind Starter Kit. It features multiple CSS components
                  based on the Tailwindcss design system.
                </p> -->
            </div>
          </div>
        </div>
        <div class="mt-14 text-white text-center text-3xl">
          <TipsComponent />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TipsComponent from "../components/HealthtipsComponent.vue";
import ApiComponent from "../components/ApiComponent.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router";
import { onMounted, ref } from "vue";

export default {
  name: "home-page",
  components: {
    TipsComponent,
    ApiComponent,
  },
  setup() {
    const isLoggedIn = ref(false);
    let auth;

    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
        console.log("Authentication state changed");
        console.log("isLoggedIn: ", isLoggedIn.value);
      });
    });

    return {
      isLoggedIn,
    };
  },
};
</script>



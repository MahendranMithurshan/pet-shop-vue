<script setup>
import { ref } from "vue";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMsg = ref("");

const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      
      router.push("/product");
    })
    .catch((error) => {
      console.log(error.code);
      // alert(error.message);
      errorMsg.value = error.message;
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {})
    .catch((erroe) => {
      // handle error
    });
};
const closeAlert = () => {
  errorMsg.value = "";
};
</script>

<template>
  <div class="mx-auto px-5 md:max-w-screen-lg">
    <div class="flex flex-wrap">
      <div class="flex w-full flex-col md:w-1/2">
        <div
          class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0"
        >
          <p class="text-left text-3xl font-bold">Register</p>
          <p class="text-left text-3xl font-bold">Please enter your details.</p>

          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
            v-if="errorMsg"
          >
            <span class="block sm:inline">{{ errorMsg }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                class="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                @click="closeAlert"
              >
                <title>Close</title>
                <path
                  d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                />
              </svg>
            </span>
          </div>

          <!-- <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img class="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="" />Register with Google</button> -->
          <!-- <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
        <div class="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
      </div> -->
          <div class="flex flex-col pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
              <div
                class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="email"
                  class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="mb-12 flex flex-col pt-4">
              <div
                class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition"
              >
                <input
                  type="password"
                  id="password"
                  name="password"
                  v-model="password"
                  class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              @click="register"
              class="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div
        class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2"
      >
        <div class="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p class="mb-8 text-3xl font-semibold leading-10">
            Pets are humanizing. They remind us we have an obligation and
            responsibility to preserve and nurture and care for all life.
          </p>
          <p class="mb-4 text-3xl font-semibold">James Cromwell</p>
          <p class="">Actor and Animal Rights Activist</p>
          <p class="mb-7 text-sm opacity-70">USA</p>
        </div>
        <img
          class="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
          src="../assets/images/register-page-img.avif"
        />
      </div>
    </div>
  </div>
</template>

<style type="text/css">
.st0 {
  fill: none;
  stroke: currentColor;
  stroke-width: 20;
  stroke-linecap: round;
  stroke-miterlimit: 3;
}
</style>

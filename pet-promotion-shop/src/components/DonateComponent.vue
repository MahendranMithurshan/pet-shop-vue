<template>
  <div id="donate">
    <main>
      <div class="">
        <div class="mx-auto px-5 md:max-w-screen-lg">
          <h1 class="pt-16 pb-5 text-center text-5xl font-semibold">
            Help Us Create a Better World for Pets: Donate and Make a Lasting
            Impact!
          </h1>
          <p class="pb-10 text-center text-base uppercase text-gray-700">
            Join our subscription plans and make a difference in the lives of
            our beloved pets. Your donations provide vital support for their
            well-being and happiness.
          </p>
        </div>
        <div
          class="mx-auto mt-4 justify-center px-4 leading-8 md:flex md:max-w-screen-lg"
        >
          <div
            v-for="donation in donationCard"
            :key="donation.id"
            class="relative self-center md:w-1/3 lg:mr-6 lg:self-auto"
          >
            <div
              class="relative mt-8 mb-12 w-full self-center lg:mr-6 lg:self-auto"
            >
              <div
                id=""
                class="relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white shadow-transparent hover:bg-cyan-300"
              >
                <div class="relative flex h-full flex-col items-center px-4">
                  <div class="flex w-full flex-col items-center pb-6">
                    <p class="m-6 text-center text-xl font-semibold">
                      {{ donation.name }}
                    </p>
                    <div class="mb-4 items-baseline">
                      <p
                        class="text-center text-sm font-light text-gray-600 line-through"
                      >
                        {{ donation.price }}
                      </p>
                      <div class="flex items-baseline justify-center">
                        <p class="text-4xl font-semibold text-gray-800">
                          {{ donation.dprice }}
                        </p>
                        <p class="text-2xl font-semibold text-gray-800">.99</p>
                        <p class="ml-1 text-lg tracking-wide">/ month</p>
                      </div>
                      <p class="mt-1 text-center font-light text-gray-600">
                        <span class="mr-2">discounted price</span>
                      </p>
                    </div>
                  </div>
                  <button
                    class="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-sm border border-gray-400 bg-transparent p-3 text-center text-sm font-bold normal-case leading-normal tracking-wide text-gray-900 duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-gray-100"
                    id="buyNowTwo Year Plan-200-lg"
                  >
                    Get Membership
                  </button>
                  <div class="flex w-full flex-col">
                    <div class="my-6 mx-4 self-center">
                      <div class="mb-3 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-5 w-5 flex-shrink-0 p-px text-indigo-600"
                        >
                          <polyline
                            points="20 6 9 17 4 12"
                            class=""
                          ></polyline></svg><span class="ml-2 text-base">{{
                          donation.option1
                        }}</span>
                      </div>
                      <div class="mb-3 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-5 w-5 flex-shrink-0 p-px text-indigo-600"
                        >
                          <polyline
                            points="20 6 9 17 4 12"
                            class=""
                          ></polyline></svg><span class="ml-2 text-base">{{
                          donation.option2
                        }}</span>
                      </div>
                      <div class="mb-3 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-5 w-5 flex-shrink-0 p-px text-indigo-600"
                        >
                          <polyline
                            points="20 6 9 17 4 12"
                            class=""
                          ></polyline></svg><span class="ml-2 text-base">{{
                          donation.option3
                        }}</span>
                      </div>
                      <div class="mb-3 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-5 w-5 flex-shrink-0 p-px text-indigo-600"
                        >
                          <polyline
                            points="20 6 9 17 4 12"
                            class=""
                          ></polyline></svg><span class="ml-2 text-base">{{
                          donation.option4
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full flex-col"></div>
                </div>
              </div>
              <div class="flex w-full items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "donation-page",
  components: {},
  data() {
    return {
      donationCard: [
        {
          id: 1,
          name: "Standard Donation Plan",
          price: "$12.99",
          dprice: "8",
          option1: "Socialise Excercise",
          option2: "Handscissor Finish",
          option3: "Ears Flushed & Cleaned",
          option4: "Conditioning Treatment",
        },
        {
          id: 2,
          name: "Premium Donation Plan",
          price: "$18.99",
          dprice: "15",
          option1: "Massage Therapy",
          option2: "Coat Color Enhancement",
          option3: "Ears Flushed & Cleaned",
          option4: "Conditioning Treatment",
        },
        {
          id: 3,
          name: "Guardian Donation Plan",
          price: "$24.99",
          dprice: "18",
          option1: "Socialise Excercise",
          option2: "Special Occasion Packages",
          option3: "Luxury Spa Package",
          option4: "Aromatherapy",
        },
      ],
    };
  },
};
</script>
<style>
/* @import url('./assets/css/donate.css'); */
</style>

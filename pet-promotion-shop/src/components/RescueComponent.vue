<template>
  <div id="rescue">
    <main class="mx-auto px-5 md:max-w-screen-lg">
      <div class="wrapper">
        <div>
          <div
            class="relative pt-12 pb-12 flex content-center items-center justify-center"
          >
            <div class="flex flex-wrap items-center mt-16 mb-8">
              <div class="w-full md:w-6/12 mr-auto ml-auto">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
                >
                  <img
                    alt="..."
                    src="../assets/images/rescue-home1.avif"
                    class="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
              <div class="w-full md:w-5/12 mr-auto ml-auto">
                <h3 class="text-3xl mb-2 font-semibold leading-normal">
                  Unleashing Hope: Transforming Lives Through Pet Rescue
                </h3>
                <p
                  class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
                >
                  Discover the heartwarming world of pet rescue at Paws. We are
                  dedicated to saving animals and finding them forever homes.
                  When you adopt from us, you're giving a neglected or abandoned
                  pet a fresh start. Our team provides comprehensive care,
                  ensuring their well-being and happiness. Can't adopt right
                  now? You can still make a difference by volunteering or
                  donating supplies. Join us in our mission to give every pet a
                  chance at a loving home.
                </p>
                <p
                  class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
                >
                  At Paws, we believe in the special bond between pets and their
                  owners, and we strive to foster a community that celebrates
                  the joy and love they bring to our lives. Join us in creating
                  a happy and healthy life for your furry companions.
                </p>
              </div>
            </div>
          </div>
          <section>
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-2xl font-bold text-gray-800">Featured Pets</h2>
              <!-- <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Browse More Pets</button> -->
              <a
                href="/adopt"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >Browse More Pets</a
              >
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="pet in featuredPets"
                :key="pet.id"
                class="bg-white rounded-lg shadow-md p-4 hover:shadow-2xl hover:bg-gray-400"
              >
                <img
                  :src="pet.image"
                  alt="Pet"
                  class="rounded-lg w-full h-40 object-cover"
                />
                <h3 class="text-xl font-semibold text-gray-800 mt-2">
                  {{ pet.name }}
                </h3>
                <p class="font-semibold text-gray-600 mt-1">{{ pet.breed }}</p>
                <button
                  class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Adopt
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "home-page",
  components: {},
  data() {
    return {
      featuredPets: [
        {
          id: 1,
          name: "Buddy",
          breed: "Labrador Retriever",
          image: "../src/assets/images/rescue/rescue-dog.jpg",
        },
        {
          id: 2,
          name: "Milo",
          breed: "Golden Retriever",
          image: "../src/assets/images/rescue/rescue2.jpg",
        },
        {
          id: 3,
          name: "Luna",
          breed: "Siamese Cat",
          image: "../src/assets/images/rescue/rescue3.avif",
        },
        
      ],
    };
  },
};
</script>

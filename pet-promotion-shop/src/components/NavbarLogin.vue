<template>
  <div>
    <header class="inset-x-0 top-0 z-50 text-white fixed bg-slate-800">
      <nav
        class="p-2 lg:px-8 lg:max-w-7xl mx-auto flex flex-wrap items-center justify-between"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a
            href="/"
            class="flex items-center whitespace-nowrap text-2xl font-black"
          >
            <!-- <span class="sr-only">Petso</span> -->
            <img
              src="../assets/images/logo-no-background.png"
              class="h-12 mr-3"
              alt="Shop_Logo"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-white hover:text-blue-700 text-sm font-semibold leading-6"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/register"
            class="font-medium text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Register<span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="../components/images/Logo_02.png"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="/register"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Register</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    DialogPanel,
    Dialog,
    Bars3Icon,
    XMarkIcon,
  },
  setup() {
    const mobileMenuOpen = ref(false);
    const navigation = [
      { name: "Home", href: "/" },
      // { name: 'Donate', href: '#donate' },
      // { name: 'Products', href: '/product' },
      // { name: 'Rescue', href: '#rescue' },
      // { name: 'About us', href: '#aboutus' },
      // { name: 'Contact us', href: '#contactus' }
    ];
    return {
      mobileMenuOpen,
      navigation,
    };
  },
};
</script>

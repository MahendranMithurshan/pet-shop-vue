<template>
  <div class="swiperPC">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :navigation="false"
      :modules="modules"
    >
      <swiper-slide
        >Regular Veterinary Check-ups: Schedule routine visits for preventive
        care.</swiper-slide
      >
      <swiper-slide
        >Vaccinations: Protect your pet from diseases with appropriate
        vaccinations.</swiper-slide
      >
      <swiper-slide
        >Balanced Diet: Feed a nutritious and well-balanced diet for optimal
        health.</swiper-slide
      >
      <swiper-slide
        >Portion Control: Avoid overfeeding to prevent obesity-related health
        problems.</swiper-slide
      >
      <swiper-slide
        >Regular Exercise: Keep your pet active for physical and mental
        well-being.</swiper-slide
      >
      <swiper-slide
        >Dental Care: Maintain oral hygiene to prevent dental diseases and
        infections.</swiper-slide
      >
      ...
    </swiper>
  </div>
</template>
<script>
// import Swiper core and required modules

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style></style>

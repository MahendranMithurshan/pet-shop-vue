<script>
import Navbar from "../components/NavbarComponent.vue";
import Index from "../components/IndexComponent.vue";
import Donate from "../components/DonateComponent.vue";
import Rescue from "../components/RescueComponent.vue";
import AboutUs from "../components/AboutusComponent.vue";
import ContactUs from "../components/ContactusComponent.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navbar,
    Index,
    Donate,
    Rescue,
    AboutUs,
    ContactUs,
  },
};
</script>

<template>
  <main>
    <Navbar />
    <Index />
    <Donate />
    <Rescue />
    <AboutUs />
    <ContactUs />
  </main>
</template>

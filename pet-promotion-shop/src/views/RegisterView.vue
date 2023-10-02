<template>
  <RegisterNav />
  <div>
    <Register />
  </div>
</template>

<script>
import RegisterNav from "../components/NavbarRegister.vue";
import Register from "../components/RegisterComponent.vue";

export default {
  components: {
    RegisterNav,
    Register,
  },
};
</script>

<style scoped>

</style>

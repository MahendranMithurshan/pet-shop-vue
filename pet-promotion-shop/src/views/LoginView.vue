<template>
  <LoginNav />
  <div>
    <Login />
  </div>
</template>

<script>
import LoginNav from "../components/NavbarLogin.vue";
import Login from "../components/LoginComponent.vue";

export default {
  components: {
    LoginNav,
    Login,
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

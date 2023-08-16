<template>
    <Navbar/>
    <router-view />
    <Foter/>
</template>

<script>
import Foter from "/src/components/foter.vue";
import Navbar from "../src/components/Navbar.vue"


export default {
  components: {
    Foter,
    Navbar,
  },

};
</script>
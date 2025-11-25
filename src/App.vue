<template>
  <div class="container">
    <div>{{ message }}</div>
    <Contact name="Bhrugen" phone="123123123" :ownername="contactOwner"></Contact>
    <!--local component-->
    <!-- <ButtonContainer></ButtonContainer> -->
  </div>
</template>

<script setup>
import Contact from "./components/Contact.vue";
//import ButtonContainer from "./components/ButtonContainer.vue";
const message = "Hello vue";
const contactOwner = "dotnetmastery";
</script>

<style></style>

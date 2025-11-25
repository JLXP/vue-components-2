<template>
  <div class="container">
    <div>{{ message }}</div>
    <ContactUs></ContactUs>
    <!--local component-->
    <ButtonContainer></ButtonContainer>
  </div>
</template>

<script setup>
import ContactUs from "./components/ContactUs.vue";
import ButtonContainer from "./components/ButtonContainer.vue";
const message = "Hello vue";
</script>

<style></style>

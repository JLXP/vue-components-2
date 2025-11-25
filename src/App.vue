<template>
  <div>{{ message }}</div>
  <contact-us></contact-us>
  <!--local component-->
  <ButtonContainer></ButtonContainer>
</template>

<script setup>
import ButtonContainer from './components/ButtonContainer.vue';
const message = "Hello vue";
</script>

<style></style>

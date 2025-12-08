<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text-success">ContactOPedia</h1>
    <div class="container">
      <LuckyNumber></LuckyNumber>
      <br />
      <LuckyNumber2></LuckyNumber2>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, provide } from "vue";
import LuckyNumber from "./components/LuckyNumber.vue";
import LuckyNumber2 from "./components/LuckyNumber2.vue";
</script>

<style></style>

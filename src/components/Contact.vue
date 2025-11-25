<template>
  <div class="bg-info rounded p-2 m-2">
    <h3>Name: {{ name }}</h3>
    <h3>Email: {{ email }}</h3>
    <h3>Phone: {{ phone }}</h3>
  </div>
</template>
<script setup>
import { ref } from "vue";
const email = ref("hello@dotnetmastery.com");
const props = defineProps(["name", "phone"])
</script>

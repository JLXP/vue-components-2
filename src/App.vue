<template>
  <h1>Hello vue</h1>
  <button @click="showMessage">Show Message</button>
  <br />
  <h1>{{ count }}</h1>
  <button @click="count++">Clicked {{ count }} times</button>
  <ButtonContainer v-if="count == 1" />
</template>

<script setup>
import ButtonContainer from "./components/ButtonContainer.vue";
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";

const message = ref("Hello Vue");
const showMessage = () => {
  message.value = "Hello Vue from function";
};
const count = ref(0);

onBeforeMount(() => {
  console.log("onBeforeMount - App.vue");
});

onMounted(() => {
  console.log("onMounted - App.vue");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate - App.vue");
});

onUpdated(() => {
  console.log("onUpdated - App.vue");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount - App.vue");
});

onUnmounted(() => {
  console.log("onUnmounted - App.vue");
});
</script>

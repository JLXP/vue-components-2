<template>
  <LuckyNumberParentComponent>
    <template v-slot:default>
      <p>We have two version for picking lucky number</p>
      <hr />
    </template>

    <template v-slot:moreInfo>
      <p>Click the button to toggle between the two version</p>
    </template>
    <template v-slot:learnSlot>
      <button @click="showMessage">What will we learn</button>
      <h4 class="text-success">{{ message }}</h4>
    </template>
  </LuckyNumberParentComponent>
</template>

<script setup>
import { ref } from "vue";
import LuckyNumberParentComponent from "./components/LuckyNumberParentComponent.vue";

const message = ref("");

function showMessage() {
  message.value = "We will learn how to use slots";
}
</script>

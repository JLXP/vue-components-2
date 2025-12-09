<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text-success">Learn Slots</h1>
    <div class="container text-center bg-white">
        <slot></slot>
      <button class="btn btn-primary text-black m-2" @click="newVersion = !newVersion">Toggle Component</button>
      <br/>

      <button class="btn btn-primary text-black m-2" @click="newVersion=false">Lucky Number V1</button>
      <button class="btn btn-primary text-black m-2" @click="newVersion=true">Lucky Number V2</button>
      <br/>
      <br/>
      <keep-alive :include="['LuckyNumber','LuckyNumber2']">
        <component :is="currentComponent" class="border" />
      </keep-alive>   
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import LuckyNumber from "./LuckyNumber.vue";
import LuckyNumber2 from "./LuckyNumber2.vue";

const newVersion = ref(false);

const currentComponent = computed(()=>{
  return newVersion.value ? LuckyNumber2 : LuckyNumber;
})


</script>

<style></style>

<template>
  <div class="bg-info rounded p-1 pb-4 m-2">
    <div class="row">
      <div class="col-12">
        <h3>Name: {{ name }}</h3>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
      </div>
      <div class="col-3">
        <button
          @click="emit('update-favorite', { isFavorite: props.isFavorite, name: props.name });"
          :class="[isFavorite ? 'btn btn-warning form-control' : 'btn btn-success form-control']"
        >
          {{ isFavorite ? "Remove from" : "Add to" }}
        </button>
      </div>
      <div class="col-3">
        <LuckyNumber ></LuckyNumber>
      </div>
    </div>
    <span class="float-end small" v-if="ownername != ''">
      *this contact info belong to {{ ownername }}
    </span>
  </div>
</template>
<script setup>
import LuckyNumber from './LuckyNumber.vue';

//import { ref, defineProps } from "vue";
//const email = ref("hello@dotnetmastery.com");
const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownername: String,
  email: { type: String, required: false, default: "-n/a-" },
  isFavorite: Boolean,
});

const emit = defineEmits(["update-favorite"]);
function toggleFavorite() {
  emit("update-favorite", { isFavorite: props.isFavorite, name: props.name });
}
</script>

<template>
  <div class="container">
    <div>{{ message }}</div>
    Contact Owner Name : <input v-model="ownerName"/>
    <div class="row">
      <div class="col-12" v-for="contact in contacts" :key="contact.name">
          <Contact
            :name="contact.name"
            :phone="contact.phone"
            :ownername="contact.ownerName"
            :email="contact.email"
            :isFavorite="contact.isFavorite"
            @update-favorite="contact.isFavorite = !contact.isFavorite"
          >
          </Contact>
      </div>
    </div>
    <!--local component-->
    <!-- <ButtonContainer></ButtonContainer> -->
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Contact from "./components/Contact.vue";
//import ButtonContainer from "./components/ButtonContainer.vue";
const message = "Hello vue";
const ownerName = ref("dotnetmastery");
const contacts = reactive([
  {
    name: "Bruhgen",
    phone: 123131231,
    ownerName: ownerName,
    isFavorite: false
  },
  {
    name:"Bella",
    phone: 5554443333,
    ownerName: ownerName,
    isFavorite: true,
  },
  {
    name:"Ben",
    phone: 33344455543,
    ownerName: "",
    email:"ben@dotnetmastery.com",
    isFavorite:false,
  }

]);


</script>

<style></style>

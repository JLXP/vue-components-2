<template>
  <div class="container border rounded p-2">
    <div class="text-center text-white">Add New Contact</div>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model="contact.name"
            placeholder="Name"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model="contact.name"
            placeholder="Email"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model="contact.name"
            placeholder="Phone"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

const contact = reactive({
  name: "",
  phone: "",
  email: "",
});

function addContact() {
  console.log(contact);
  contact.email = "";
  contact.name = "";
  contact.phone = "";
}
s;
</script>

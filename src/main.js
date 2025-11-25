import { createApp } from "vue";
import App from "./App.vue";
import ContactUs from "./components/ContactUs.vue";
import ButtonContainer from "./components/ButtonContainer.vue";

const app = createApp(App)

app.component('contact-us', ContactUs);
app.component("button-counter", ButtonContainer)

app.mount('#app');
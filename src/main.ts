import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import roteador from "./roteador";
import { key, store } from "./store";

const app = createApp(App);
app.use(VueSweetalert2);
app.use(roteador);
app.use(store, key);
app.mount("#app");

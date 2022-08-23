import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import PrimeVue from "primevue/config";


const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

router.isReady().then(function () {
  app.mount("#app");
});

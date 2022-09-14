import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Chart from "primevue/chart";
import Chips from "primevue/chips";
import Sidebar from "primevue/sidebar";


const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);
// eslint-disable-next-line
app.component("Chart", Chart);
// eslint-disable-next-line
app.component("Chips", Chips);
// eslint-disable-next-line
app.component("Sidebar", Sidebar);


router.isReady().then(function () {
  app.mount("#app");
});

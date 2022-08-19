import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Sidebar from "primevue/sidebar";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.component("SideBar", Sidebar);

router.isReady().then(function () {
  app.mount("#app");
});

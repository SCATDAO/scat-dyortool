import { createApp } from "vue";
import App from "./App.vue";


import WorkQuest from "./components/team-development-audit/work-questions/WorkQuest";
import VueQrcodeReader from "vue-qrcode-reader";




const app = createApp(App);

app.component("WorkQuest", WorkQuest);



app.mount("#app");


app.use(VueQrcodeReader);
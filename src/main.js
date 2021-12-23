import { createApp } from "vue";
import App from "./App.vue";


import WorkQuest from "./components/team-development-audit/work-questions/WorkQuest";
import WorkSummary from "./components/team-development-audit/work-summary/WorkSummary";
import VueQrcodeReader from "vue-qrcode-reader";




const app = createApp(App);

app.component("WorkQuest", WorkQuest);
app.component("WorkSummary", WorkSummary);



app.mount("#app");


app.use(VueQrcodeReader);
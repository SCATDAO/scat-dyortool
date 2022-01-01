import { createApp } from "vue";
import App from "./App.vue";

import WorkMain from "./components/work-main/WorkMain";
import WorkQuest from "./components/work-team/work-questions/WorkQuest";
import WorkSummary from "./components/work-team/work-summary/WorkSummary";

import VueQrcodeReader from "vue-qrcode-reader";

const app = createApp(App);

app.component("WorkMain", WorkMain);
app.component("WorkQuest", WorkQuest);
app.component("WorkSummary", WorkSummary);

app.mount("#app");

app.use(VueQrcodeReader);

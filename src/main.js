import { createApp } from "vue";
import App from "./App.vue";


import WorkQuest from "./components/team-development-audit/work-questions/WorkQuest";



const app = createApp(App);

app.component("WorkQuest", WorkQuest);

app.mount("#app");

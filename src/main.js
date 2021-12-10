import { createApp } from "vue";
import App from "./App.vue";


import WorkQuest from "./components/team-development-audit/work-questions/WorkQuest";
import WorkSpace from "./components/team-development-audit/work-space/WorkSpace";
import WorkProject from "./components/team-development-audit/work-project/WorkProject";


const app = createApp(App);

app.component("WorkSpace", WorkSpace);
app.component("WorkProject", WorkProject);
app.component("WorkQuest", WorkQuest);

app.mount("#app");

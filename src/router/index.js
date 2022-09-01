import { createRouter, createWebHistory } from "vue-router";

import DyorMain from "../pages/DyorMain.vue";
import DAPPsetting from "../pages/DAPPsetting.vue";
import NFTsetting from "../pages/NFTsetting.vue";
import DAPPwork from "../pages/DAPPwork.vue";
import NFTwork from "../pages/NFTwork.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: DyorMain },
    { path: "/dapp-setting", component: DAPPsetting },
    { path: "/nft-setting", component: NFTsetting },
    { path: "/dapp-scheme", component: DAPPwork },
    { path: "/nft-scheme", component: NFTwork },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;

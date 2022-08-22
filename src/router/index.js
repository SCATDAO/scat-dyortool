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
    { path: "/dapp-scheme", component: DAPPsetting },
    { path: "/nft-scheme", component: NFTsetting },
    { path: "/dapp", component: DAPPwork },
    { path: "/nft", component: NFTwork },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;

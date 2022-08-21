import { createRouter, createWebHistory } from "vue-router";

import DyorMain from "../pages/DyorMain.vue";
import DappScheme from "../pages/DappScheme.vue";
import NftScheme from "../pages/NftScheme.vue";
import DyorQuestion from "../pages/DyorQuestion.vue";
import DyorNFT from "../pages/DyorNFT.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: DyorMain },
    { path: "/dapp-scheme", component: DappScheme },
    { path: "/nft-scheme", component: NftScheme },
    { path: "/research", component: DyorQuestion },
    { path: "/nft", component: DyorNFT },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;

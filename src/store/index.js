import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      nft_scheme: {
        project_name: "Name",
        description: "Empty",
        category: "Empty",
        website: "Website",
        discord: "Empty",
        twitter: "Empty",
        number_in_circulation: "Empty",
        whitelist: "Empty",
        number_per_mint: "Empty",
        mint_date: "Empty",
        nickname: "Nickname",
        project_logo: "",
      },
      dapp_scheme: {
        project_name: "Name",
        description: "Empty",
        website: "Website",
        category: "Empty",
        symbol: "Empty",
        repository: "Empty",
        nickname: "Nickname",
        project_logo: "",
      },
    };
  },
  mutations: {
    configureDAPP(state, payload) {
      state.dapp_scheme = payload;
    },

    configureNFT(state, payload) {
      state.nft_scheme = payload;
    },
  },
  getters: {
    getAuditInfoNFT(state) {
      return state.nft_scheme;
    },
    getAuditInfoDAPP(state) {
      return state.dapp_scheme;
    },
  },
});

export default store;

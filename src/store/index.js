import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      newAudit: {
        an: "Nickname",
        pn: "Name",
        pw: "Category",
        pc: "website",
        pl: "",
        pp: "",
      },
      nft_scheme: {
        project_name: "Name",
        description: "Empty",
        website: "Website",
        discord: "Empty",
        twitter: "Empty",
        number_in_circulation: "Empty",
        whitelist: "Empty",
        number_per_mint: "Empty",
        mint_date: "Empty",
        nickname: "Nickname",
        project_logo: ""
      },
      answeredQuestion: null,
    };
  },
  mutations: {
    modifyAuditData(state, payload) {
      state.newAudit = payload;
    },
    configureNFT(state, payload){
      state.nft_scheme = payload;
    },
    newQuestData(state, payload) {
      state.answeredQuestion = payload;
    },
    modifyPersonal(state, payload) {
      state.newAudit.pp = payload;
    },
  },
  getters: {
    getAuditInfo(state) {
      return state.nft_scheme;
    },
    sendMeAnswered(state) {
      return state.answeredQuestion;
    },
  },
});

export default store;

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
        project_name: "",
        description: "",
        website: "",
        discord: "",
        twitter: "",
        number_in_circulation: "",
        whitelist: "",
        number_per_mint: "",
        mint_date: "",
        nickname: "",
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
    sendMeAtribute(state) {
      return state.newAudit;
    },
    sendMeAnswered(state) {
      return state.answeredQuestion;
    },
  },
});

export default store;

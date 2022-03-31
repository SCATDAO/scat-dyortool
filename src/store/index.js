import { createStore } from 'vuex'


const store = createStore({
  state() {
    return {
      count: 0,
      newAudit: {
        an: "Dyor",
        pn: "Name",
        pw: "Category",
        pc: "www.example.com",
        pl: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        pp: ""
      },
      answeredQuestion: null,
    }
  },
  mutations: {
    modifyAuditData(state, payload) {
      state.newAudit = payload;
    },
    newQuestData(state, payload) {
      state.answeredQuestion = payload;
    },
    modifyPersonal(state, payload) {
      state.newAudit.pp = payload;
    }
  },
  getters: {
    sendMeAtribute(state) {
      return state.newAudit
    },
    sendMeAnswered(state) {
      return state.answeredQuestion
    }
  }
})


export default store
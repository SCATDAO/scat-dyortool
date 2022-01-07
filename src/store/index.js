import { createStore } from 'vuex'


const store = createStore({
  state() {
    return {
      count: 0,
      currentAudit: {
        an: '',
        pn: '',
        pw: '',
        pc: '',
        pl: [],
      }
    }
  },
  mutations: {
    modifyState(state, payload) {
      state.currentAudit = payload;
      console.log(state.currentAudit);
    }
  }
})


export default store
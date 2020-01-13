import moment from 'moment'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plan: []
  },
  getters: {
    planThisWeek: ({ plan }) => {
      const weekNum = moment().isoWeek();
      return plan.filter(({ week }) => week === weekNum);
    },
    weekLabel: () => {
      const today = moment();
      const start = today.startOf('week').format('MMMM D');
      const end = today.endOf('week').format('MMMM D');
      return `${start} - ${end} (Week ${today.isoWeek()})`;
    }
  },
  mutations: {
    setPlan(state, plan) {
      state.plan = plan;
    }
  },
  actions: {
    async getPlan({ commit }) {
      const response = await fetch('/plan.json');
      const plan = await response.json();
      commit('setPlan', plan);
    }
  },
  modules: {
  }
})

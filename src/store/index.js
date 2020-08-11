import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginDialog: false,
    user: {
      id: "",
      displayName: "",
      logged: false,
    },
  },
  mutations: {
    changeLoginState(state) {
      state.loginDialog = !state.loginDialog;
    },
    startSession(state, payload) {
      if (payload) {
        state.user = payload;
        localStorage.setItem("user_calc_pwa", JSON.stringify(payload));
      }
    },
    loadSession(state) {
      const user = JSON.parse(localStorage.getItem("user_calc_pwa"));
      if (user) {
        state.user = user;
      }
    },
    loggout(state) {
      state.user = {
        id: "",
        displayName: "",
        logged: false,
      };
      localStorage.removeItem("user_calc_pwa");
    },
  },
  getters: {
    getUserLogged: (state) => state.user.logged,
    getUserName: (state) => state.user.displayName,
  },
  actions: {
    checkUserSesstion({commit}, payload = {}){
      if(localStorage.getItem('user_calc_pwa')){
        commit('loadSession');
      }
      else if(payload != null) { 
        const user = payload
        user.logged = true
        commit('startSession', user);
      }else return
    }
  },
  modules: {},
});

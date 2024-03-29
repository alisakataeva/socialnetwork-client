import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    apiUrl: 'http://localhost:8000',
    profile: {}
  },

  mutations: {
    setProfile (state, profileData) {
      state.profile = profileData;
    }
  }

})